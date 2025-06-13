import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState('');

  // const server = 'http://localhost:8000'; // Backend server URL
     const server = import.meta.env.VITE_API_BASE_URL
  const { id } = useParams();
  const token = localStorage.getItem('token')

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0]; // Get the video ID from the URL
    console.log('videoid-->',videoId)
    if (videoId) {
      const result = `https://www.youtube.com/embed/${videoId}`
      // const result = 'https://www.youtube.com/embed/7wnove7K-ZQ?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg'
      console.log('first--->',result)
      return result;
    }
    return ''; // Return empty string if invalid URL
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${server}/api/courses/${id}`);
        const data = await response.json();
        setCourseData(data?.data);
      } catch (err) {
        setError('Failed to load course details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [id]);

  // Handle Razorpay payment
  const handlePayment = async () => {
    console.log('token check',token)
    if (!token) {
      alert("Please login to purchase this course.");
      return;
    }

    setLoading(true);
    const amountInPaise = courseData?.currentPrice * 100;

    try {
      const orderRes = await axios.post(
        `${server}/api/payment`,
        { amount: amountInPaise, courseId: courseData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const orderData = orderRes.data;

      const options = {
        key: 'rzp_test_nUQ9V1BPQ3riej',
        amount: amountInPaise,
        currency: 'INR',
        name: courseData.courseTitle,
        description: `Payment for ${courseData.courseTitle}`,
        order_id: orderData.id,
        handler: async function (response) {
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            courseId: courseData._id,
            amount: amountInPaise
          };

          const verifyRes = await fetch(`${server}/api/payment/success`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(paymentData)
          });

          const result = await verifyRes.json();
          if (result.success) {
            alert("✅ Payment Successful! Thank you for enrolling.");
          } else {
            alert("❌ Payment verification failed.");
          }
        },
        prefill: {
          name: 'Student',
          email: 'student@example.com'
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (err) {
      console.error(err);
      alert("Payment failed or couldn't initiate.");
    } finally {
      setLoading(false);
    }
  };
  // if (loading) return <div className="text-white text-center py-20">Loading course details...</div>;
  if (error) return <div className="text-red-500 text-center py-20">{error}</div>;
  if (!courseData) return null; // Prevent rendering if data is null

  return (
    <div className="bg-black">
      <div className="flex flex-col justify-center items-center mx-auto lg:flex-row bg-black py-12 w-[90%]">
        <div className="lg:w-1/2 lg:pr-12 space-y-6">
          <h1 className="text-3xl font-bold text-red-600">{courseData.courseTitle}</h1>
          <p className="text-lg text-white">{courseData.courseDescription}</p>
          <div className="text-sm text-white">
            <p><strong className='text-red-600'>Bestseller</strong></p>
            <p>Created by: {courseData.createdBy || 'Unknown Instructor'}</p>
            <p>Last updated: {courseData.lastUpdated || '2025'}</p>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p className='text-red-600'>Languages:</p>
            <p className='text-white'>{courseData.languages?.join(', ') || 'English'}</p>
          </div>

          {/* Target Audience */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-red-600">Who is this course for?</h3>
            <ul className="list-disc pl-5 mt-4 text-sm text-white">
              {courseData.whosThisCourseFor?.map((audience, index) => (
                <li key={index}>{audience}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-red-600">What will you gain?</h3>
            <ul className="list-disc pl-5 mt-4 text-sm text-white">
              {courseData.whatWillYouGain?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-red-600">Requirements</h3>
            <ul className="list-disc pl-5 mt-4 text-sm text-white">
              {courseData.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Pricing and Video Card */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:px-12 space-y-6">
          <div className="bg-black rounded-lg shadow-xl p-6 w-full">
            <h3 className="text-2xl font-semibold text-white">This Premium course is included in plans</h3>

            {/* Video Embedding */}
            <div className="relative mt-6 aspect-w-16 h-full mb-[20rem]">
              {/* <iframe
                className="absolute top-0 left-0 w-[35vw] h-[42vh] rounded-lg"
                src={courseData.videoUrl || "https://www.youtube.com/embed/7wnove7K-ZQ"}
                title="Course Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}

<div className="relative">
        {/* Embed YouTube video using iframe */}
        {/* <div className="relative mt-6 aspect-w-16 h-full mb-[20rem]"> */}
        <iframe 
         className="absolute top-0 left-0 w-[35vw] h-[42vh] rounded-lg"
        // src="https://www.youtube.com/embed/G-ZYPZGklsc"
        src= {getYouTubeEmbedUrl(courseData?.videourl)}
        //  title="FREE WordPress Complete Course For Beginners 2025 | How To Make a WordPress Website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen></iframe>
        </div>
      
      {/* </div> */}
            </div>

            {/* Pricing and Discount Information */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <span className="text-lg font-semibold text-white mr-4 mt-12">Current Price:</span>
                <span className="text-2xl font-bold text-green-500 mt-12">₹{courseData.currentPrice}</span>
                <span className="line-through ml-4 text-gray-500 text-xl mt-12">₹{courseData?.lastPrice}</span>
              </div>
              <p className="text-sm text-white">Discount: {courseData.discount}% off</p>
              <p className="text-sm text-red-600 font-semibold">Limited-time offer!</p>
              <p className="text-sm text-white">30-Day Money-Back Guarantee</p>
              <p className="text-sm text-white">Full Lifetime Access</p>
            </div>

            {/* Buy Now Button */}
            <div className="mt-8">
              <button
                className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300 w-full"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
