import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "./assets/Images/Eccomerce/1.png";
import image2 from "./assets/Images/Eccomerce/2.png";
import image3 from "./assets/Images/Eccomerce/3.png";
import adminpannel from "./assets/Images/Eccomerce/adminpannel.png";

import mn1 from "./assets/Images/MNIST/1.png";
import mn2 from "./assets/Images/MNIST/2.png";
import mn3 from "./assets/Images/MNIST/3.png";
import mn4 from "./assets/Images/MNIST/4.png";
import mn5 from "./assets/Images/MNIST/5.png";
import mn6 from "./assets/Images/MNIST/6.png";

import React from "react";
import { useState } from "react";
import "./assets/styles.css"; // Import CSS file for styling

function App() {
  function VideoPlayer() {
    return (
      <div>
        <video controls width="500" height="300">
          <source src="../05.mp4" type="video/mp4" />
          {/* Add more <source> tags for different video formats if needed */}
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image === selectedImage ? null : image);
  };

  const TopicsList = ({ topics }) => {
    return (
      <div className="mt-5">
        <h2 className="header text-red-500 text-[18px]">
          Topics in Deep Learning and Machine Learning
        </h2>
        <ul className="topics-list">
          {topics.map((topic, index) => (
            <li key={index} className="topic-item mt-5">
              {typeof topic === "string" ? (
                <span className="topic">{topic}</span>
              ) : (
                <div className="sublist">
                  <span className="sublist-title">{topic[0]}</span>
                  <ul className="">
                    {topic[1].map((subTopic, subIndex) => (
                      <li key={subIndex} className="subtopic-item">
                        {subTopic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const topics = [
    "Linear Regression Algorithm",
    "Ridge and Lasso Regression",
    "Logistic Regression",
    "Naive Bayes",
    "Decision Tree Classification",
    [
      "Ensemble Techniques",
      ["Bagging", "Boosting", "AdaBoost", "Gradient Boosting", "XGBoost"],
    ],
    "Random Forest Classifier and Regressor",
    "K-Means Clustering",
    "Hierarchical Clustering",
    "Silhouette Score for Validating Clustering Problems",
    "DBSCAN Clustering",
    "Support Vector Machines (SVM)",
    "ANN",
    "CNN",
  ];

  const getImageSizeClass = (image) => {
    return selectedImage === image
      ? "w-full h-auto"
      : "w-full md:w-1/3 lg:w-1/4 xl:w-1/2 ";
  };
  return (
    <>
      <div className=" container  w-[90%]  rounded-sm  mx-auto mt-10">
        <div className="flex flex-row justify-between">
          <p className="text-[30px] text-blue-400">Mehdi Delnavazi</p>
          <div className="flex flex-col">
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              <a
                className="text-blue-500 text-[15px]"
                href="https://www.linkedin.com/in/mehdi-delnavazi-008469251/"
              >
                Linkdin
              </a>
            </div>

            <div>
              {" "}
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="15.5"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <a
                  className="text-blue-500 text-[15px]"
                  href="https://github.com/MEHDIDELNAVAZI"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[20px]">Qualifications</p>
          <hr />
          <ul className="mt-4">
            <li className="mt-3 mb-2 text-red-500 text-[20px]">
              Started With : Web development
            </li>
            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                Developed responsive and visually appealing websites using HTML,
                CSS, and JavaScript.
              </p>
            </li>
            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                Implemented dynamic and interactive user interfaces with jQuery
                for enhanced user experience.
              </p>
            </li>
            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                Designed and implemented responsive web applications, ensuring
                optimal performance across various devices and screen sizes.
              </p>
            </li>

            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                Utilized Bootstrap components to streamline development,
                ensuring a rapid and consistent design process.
              </p>
            </li>

            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                Integrated Tailwind CSS for additional styling flexibility and a
                utility-first approach.
              </p>
            </li>

            <li className="text-orange-400 mt-3 mb-2">
              Continued growth in web development, specializing in :
            </li>

            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                Built modern web applications with React.js, employing
                TypeScript for enhanced type safety and code scalability.
              </p>
            </li>
            <li className="text-yellow-600 mt-3 mb-2">
              Exploring the Depths: A Curious Journey into Backend Development
              with PHP
            </li>

            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                my journey in backend development with PHP, progressed to
                Learning the Laravel framework, and Worked with MySQL
              </p>
            </li>

            <li className="mt-3 mb-2 text-green-500 text-[20px]">
              Certifications in Web development
            </li>
            <ul>
              <li className="flex flex-row items-center gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="12"
                    width="12"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                </div>
                <p>
                  HTML/CSS - JS - php - C++ in{" "}
                  <a href="https://www.mftsk.com/" className="text-blue-400">
                    MJFT
                  </a>
                </p>
              </li>
            </ul>
          </ul>
          <br />

          <ul className="mt-4">
            <li className="mt-3 mb-2 text-red-500 text-[20px]">
              Passionate about data science
            </li>
            <li className="flex flex-row items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>
                Passionate about data science, with a strong focus on Python
                programming and expertise in machine learning algorithms,
                including artificial neural networks (ANN), convolutional neural
                networks (CNN), and recurrent neural networks (RNN).
              </p>
            </li>

            <li className="mt-3 mb-2 text-green-500 text-[20px]">Courses</li>

            <li className="  text-blue-500 text-[17px]">
              <a href="https://www.youtube.com/watch?v=JxgmHe2NyeY&t=9s">
                Machine learning
              </a>
            </li>
            <li className="  text-blue-500 text-[17px]">
              <a href="https://www.youtube.com/watch?v=d2kxUVwWWwU&t=15168s">
                Deep learning
              </a>
            </li>
            <li className="  text-blue-500 text-[17px]">
              <a href="https://www.w3schools.com/">Numpy - pandas W3school</a>
            </li>
            <li className="  text-blue-500 text-[17px]">
              <p>worked with MNIST - CIFAR10 dataset </p>
            </li>
          </ul>
          <TopicsList topics={topics} />
          <p className="text-[20px] mt-10">Education</p>
          <hr />
          <p>Bachelor in Computer Engineering (2019 - 2023)</p>
          <p>
            <a href="https://en.qom.ac.ir/" className="underline text-blue-400">
              Qom University / Iran
            </a>
          </p>

          <p className="text-[20px] mt-10">Skills</p>
          <p className="text-[20px] ">Web Development</p>
          <div className="flex  lg:flex-row mt-4 gap-3 flex-col">
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>HTML/CSS</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Bootstrap</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>TailwindCss</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Javascript</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Jquery</p>
            </li>

            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Ajax</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>React-js</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Typescript</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Redux</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>PHP</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Laravel</p>
            </li>
          </div>

          <p className="text-[20px] mt-10">Data science</p>
          <hr />

          <div className="flex  lg:flex-row mt-4 gap-3 flex-col">
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Python</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Tensorflow</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>keras</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>numpy</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>pandas</p>
            </li>

            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>scikit-learn</p>
            </li>

            <li className="flex flex-row items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>MYSQL</p>
            </li>
          </div>

          <p className="text-[20px] mt-10">Projects</p>
          <hr />

          <ul>
            <li className="flex flex-row items-center gap-2 mt-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <a href="https://github.com/MEHDIDELNAVAZI/Eccomercewebiste">
                <p className="underline text-blue-500">
                  Eccomerce Website with HTML/CSS/JS/AJAX/PHP
                </p>
              </a>
            </li>
            <p>
              Developed a user-friendly e-commerce platform using HTML, CSS, and
              JavaScript, with seamless data integration through AJAX. Utilized
              PHP for a robust backend, allowing easy management of products.
            </p>

            <ul>
              {" "}
              <li className="flex flex-row items-center gap-2 ml-1 mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="12"
                    width="12"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                </div>
                <p>Admin Panel:</p>
              </li>
            </ul>
            <ul>
              <li className="flex flex-row items-center gap-2 ml-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="10"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                </div>
                <p>
                  Designed and implemented an intuitive admin panel for
                  effortless product management.
                </p>
              </li>
            </ul>
          </ul>
          <ul>
            {" "}
            <li className="flex flex-row items-center gap-2 ml-1 mt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>Product Customization:</p>
            </li>
            <ul>
              <li className="flex flex-row items-center gap-2 ml-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="10"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                </div>
                <p>
                  Added features for sizes, colors, and categories, enhancing
                  the overall shopping experience.
                </p>
              </li>
            </ul>
            <li className="flex flex-row items-center gap-2 ml-1 mt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
              <p>User Interaction:</p>
            </li>
            <ul>
              <li className="flex flex-row items-center gap-2 ml-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="10"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                </div>
                <p>
                  Integrated a comment section for user feedback, fostering
                  community engagement.
                </p>
              </li>
            </ul>
            <div className="flex flex-wrap mt-5">
              <img
                src={image1}
                alt="Image 1"
                className={`cursor-zoom-in mb-4 border ${getImageSizeClass(
                  "image1.jpg"
                )}`}
                onClick={() => handleImageClick("image1.jpg")}
              />
              <img
                src={image2}
                alt="Image 2"
                className={`mb-4 cursor-zoom-in border  ${getImageSizeClass(
                  "image2.jpg"
                )}`}
                onClick={() => handleImageClick("image2.jpg")}
              />
              <br />
              <img
                src={image3}
                alt="Image 3"
                className={` mb-4 border cursor-zoom-in ${getImageSizeClass(
                  "image3.jpg"
                )}`}
                onClick={() => handleImageClick("image3.jpg")}
              />
              <img
                src={adminpannel}
                alt="adminpannel"
                className={`mb-4 border cursor-zoom-in ${getImageSizeClass(
                  "adminpannel.jpg"
                )}`}
                onClick={() => handleImageClick("adminpannel.jpg")}
              />
            </div>
          </ul>
        </div>
        <ul>
          <br />
        </ul>
        <ul>
          <li className="flex flex-row items-center gap-2 mt-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                width="12"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
              </svg>
            </div>

            <a>
              <a
                href="https://github.com/MEHDIDELNAVAZI/MNIST_CIFAR10_FRONT"
                className="text-blue-500 underline"
              >
                <p className="">
                  MNIST AND CIFAR10 dataset predict with react and Flask
                </p>
              </a>
            </a>
          </li>

          <div>
            <h1>React app</h1>
            <div className="flex flex-wrap mt-5">
              <img
                src={mn2}
                alt="Image 2"
                className={`mb-4 cursor-zoom-in border  ${getImageSizeClass(
                  "image2.jpg"
                )}`}
                onClick={() => handleImageClick("image2.jpg")}
              />
              <br />
              <img
                src={mn3}
                alt="Image 3"
                className={` mb-4 border cursor-zoom-in ${getImageSizeClass(
                  "image3.jpg"
                )}`}
                onClick={() => handleImageClick("image3.jpg")}
              />
              <img
                src={mn4}
                alt="adminpannel"
                className={`mb-4 border cursor-zoom-in ${getImageSizeClass(
                  "image4.jpg"
                )}`}
                onClick={() => handleImageClick("adminpannel.jpg")}
              />
              <img
                src={mn5}
                alt="adminpannel"
                className={`mb-4 border cursor-zoom-in ${getImageSizeClass(
                  "image5.jpg"
                )}`}
                onClick={() => handleImageClick("adminpannel.jpg")}
              />
              <img
                src={mn6}
                alt="adminpannel"
                className={`mb-4 border cursor-zoom-in ${getImageSizeClass(
                  "image6.jpg"
                )}`}
                onClick={() => handleImageClick("adminpannel.jpg")}
              />
            </div>
          </div>
        </ul>

        <li className="flex flex-row items-center gap-2 mt-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
            </svg>
          </div>

          <a>
            <a
              href="https://github.com/MEHDIDELNAVAZI/ML_AI_learn"
              className="text-blue-500 underline"
            >
              <p className="">machine learning algoes with examples</p>
            </a>
          </a>
        </li>
        <li className="flex flex-row items-center gap-2 mt-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
            </svg>
          </div>

          <a>
            <a
              href="https://yahoo-boking.vercel.app/"
              className="text-blue-500 underline"
            >
              <p className="">Booking webiste</p>
            </a>
          </a>
        </li>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
