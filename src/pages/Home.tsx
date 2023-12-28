import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import Lottie from 'lottie-react';
import bookHero from '../assets/images/bookHero.json';
import Typewriter from 'typewriter-effect';
import sail from '../assets/images/sale.json';
import donate from '../assets/images/donation.json';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between h-[calc(100vh-80px)] w-full max-w-7xl mx-auto text-center">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            <Typewriter
              options={{
                strings: ['Book Bridge', 'বুক ব্রিজ'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-secondary font-semibold text-xl">
            বই বিনিময়-এ যুক্ত হন এবং আপনার পুরাতন বইগুলো বিক্রি করে অন্যদের
            কাছে নতুন জীবন দিন 🔖
          </p>
          <div className="text-primary mt-10">
            <p>
              বইপ্রেমীদের জন্য এক অনন্য উদ্যোগ বই বিনিময় একটি অনলাইন প্ল্যাটফর্ম
              যেখানে আপনি আপনার পুরাতন বইগুলো অর্ধেক দামে বিক্রি করতে পারেন।
              আমাদের লক্ষ্য হলো বইপ্রেমীদের জন্য একটি সস্তা এবং সহজ উপায়ে বই
              কেনার সুযোগ তৈরি করা। বই বিনিময়-এ আপনি যেকোনো ধরনের পুরাতন বই
              বিক্রি করতে পারেন।
            </p>
          </div>
          <Link to="/about">
            <Button className="mt-5">Know More</Button>
          </Link>
        </div>
        <div className="w-full lg:w-[40%]">
          <Lottie
            className="w-full h-fit lg:w-[600px] lg:h-[600px]"
            animationData={bookHero}
          />
          ;
        </div>
      </div>
      {/* sale book */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto text-center">
        <div className="w-full lg:w-[44%]">
          <Lottie
            className="w-full h-fit lg:w-[600px] lg:h-[600px]"
            animationData={sail}
          />
        </div>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div>
            <h1 className="text-6xl font-black text-primary mb-2">
              <Typewriter
                options={{
                  strings: ['Book Sale', 'বই বিক্রয়'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-secondary font-semibold text-xl">
              আপনার অব্যবহৃত বইটি চাইলে বক্রয় করে অন্য জনকে ঞ্জান আহরনে সুযোগ
              করে দিন 💌
            </p>
            <div className="text-primary mt-10">
              <p>
                বই বিক্রয় একটি সুবিধাজনক প্রক্রিয়া, যা বই প্রকাশন করা হয়ে
                থাকা জনপ্রিয় বই প্রাপ্ত করার জন্য প্রতিষ্ঠান, বিভাগ বা ব্যক্তি
                দ্বারা চালিত হয়। এটি বইয়ের ক্রয় এবং বিক্রয়ের প্রক্রিয়ায়
                অংশীদার হতে পারে, যা বিভিন্ন অনলাইন এবং অফলাইন মাধ্যমে সম্পন্ন
                হতে পারে। বই বিক্রয় প্রক্রিয়ায় বিভিন্ন উৎপাদক, প্রকাশক, বা
                বইবাজার সংস্থা একত্রে আসে এবং গ্রাহকদের জন্য বিভিন্ন বিষয়বস্তু
                এবং লেখকের কাজ প্রদান করে। অধিকাংশ বই বিক্রয়ের জন্য ইস্যুত হয়
                যে এটি প্রকাশনার জন্য কেমন একটি বই তৈরি করবে এবং কীভাবে এটি
                গ্রাহকদের কাছে পৌঁছাতে হবে। অনলাইন বই বিক্রয় প্ল্যাটফর্মগুলি
                এবং বইবাজার বা পবিত্র বইবাজার এগুলি পুঁজিবাজারের একাধিক উদাহরণ।
                এগুলি বই বিক্রয়ের প্রক্রিয়ায় লেনদেন করতে ব্যবহার হয় এবং বই
                বিক্রয়ে লেনদেন সুবিধাজনক এবং দ্রুত করতে সাহায্য করতে পারে।
              </p>
            </div>
            <Button className="mt-5">Learn more</Button>
          </div>
        </AnimationOnScroll>
      </div>
      {/* Donate */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between w-full max-w-7xl mx-auto text-center">
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <div>
            <h1 className="text-6xl font-black text-primary mb-2">
              <Typewriter
                options={{
                  strings: ['Book Donate', 'বই দান করুন'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-secondary font-semibold text-xl">
              আপনার অব্যবহৃত বইটি দান করে কোন সুবিদা বঞ্চিত মানুষের পাশ্বে দাড়ান
              🤝
            </p>
            <div className="text-primary mt-10">
              <p>
                বই দান করারা সুযোগ বই দান একটি অসম্ভাব্য উপহার, যা জ্ঞান এবং
                সৃজনশীলতা বৃদ্ধি করতে সাহায্য করতে পারে। এটি একটি মানবিক অবদান
                যা সমাজে একটি শিক্ষার সার্থক বাতায়ন তৈরি করতে সাহায্য করে এবং
                বিভিন্ন বিষয়বস্তু এবং ধারণার বৃদ্ধি করে। বই দান একটি
                প্রতিষ্ঠানের পক্ষ থেকে একটি সামাজিক দান, যা শিক্ষার সার্থকতা ও
                সমৃদ্ধির দিকে একটি গুরুত্বপূর্ণ ধারণা অনুবাদ করে। বই দান সুযোগ
                প্রদান করতে হলে, আপনি প্রিয় বইগুলি এবং আপনার শখের লোকের মধ্যে
                এই সুযোগটি বিতরণ করতে পারেন। এটি একটি স্থায়ী লাভবান বৃদ্ধির
                উপায়, আপনার সম্প্রদায় ও সামাজিক পরিবেশে শিক্ষা এবং সাহায্যের
                প্রতি আপনার সমর্থন প্রদান করতে একটি অদৃশ্য প্রভাবও থাকতে পারে।
                একইভাবে, বই দান সংস্কৃতি এবং ভাষার বিকাশের জন্য একটি মৌল্যবান
                যাত্রা হতে পারে, যাতে লোকবল এবং সম্প্রদায় বিচরণ করতে সাহায্য
                করতে পারে।
              </p>
            </div>
            <Button className="mt-5">Learn more</Button>
          </div>
        </AnimationOnScroll>
        <div className="w-full lg:w-[44%]">
          <Lottie
            className="w-full h-fit lg:w-[600px] lg:h-[600px]"
            animationData={donate}
          />
          ;
        </div>
      </div>
      {/* about */}
      <div className="container mx-auto">
        <div className="flex gap-3 flex-wrap">
          <h4 className="text-3xl font-bold">আমাদের আদর্শ:</h4>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">01</time>
                <div className="text-lg font-black">
                  পুরাতন বই অর্ধেক দামে বিক্রি করুন
                </div>
                আপনি যদি আপনার পুরাতন বইগুলি অর্ধেক দামে বিক্রি করতে চান, তাহলে
                এই অদ্ভুত অফারটি অবশ্যই চেষ্টা করুন। আমাদের সম্মানিত গ্রাহকদের
                জন্য সুবিধাজনক এই অফারের মাধ্যমে, আপনি পুরাতন এবং মূল্যবান
                বইগুলি অর্ধেক মূল্যে পেতে পারবেন। এটি আপনার পছন্দের বইগুলি উপভোগ
                করার সুযোগ প্রদান করতে এবং আপনার বই সংকলনকে একটি নতুন স্তরে তৈরি
                করতে এই সুযোগটি মিস করবেন না। এখানে আপনি আপনার প্রিয় লেখকের
                সৃষ্টিতি পুরাতন এবং ক্লাসিক বই পাবেন, এবং সেগুলি অর্ধেক মূল্যে
                উপভোগ করতে পারবেন।
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">02</time>
                <div className="text-lg font-black">
                  আপনার পছন্দের বই সস্তায় কিনুন
                </div>
                আমরা আপনার পছন্দের বই নিয়ে একটি অসাধারণ অফার নিয়ে এসেছি! এখানে
                আপনি প্রতিষ্ঠানের চয়নে অনেক বই পাবেন এবং সেগুলি অত্যন্ত সস্তায়
                কিনতে পারবেন। আমাদের সাইটে অভিজ্ঞান করুন এবং আপনার প্রিয় লেখকের,
                জনপ্রিয় ক্যাটাগরির অথবা নতুন মোডেলের বই খুঁজে নিন। অপনার
                বুদ্ধিমত্তা, আত্মবিশ্বাস এবং জ্ঞানবান হওয়ার জন্য এখানে এসে নিন
                এবং সস্তায় বই পেতে হলে তার একটি অমুল্য সুযোগ হতে দিন। আপনার
                ভাষার চয়ন করুন, একটি কলেকশন তৈরি করুন এবং জ্ঞানের আবেগ নিয়ে
                অহংকার করুন, কারণ এখানে আপনি প্রযুক্তি, উপন্যাস, রোমান্টিক,
                গল্প, অনুবাদ, ইতিহাস, বিজ্ঞান, ও অনেক বিভিন্ন ধরনের বই পাবেন।
                স্টক শেষ না হয়, তাই সত্যিই এখনই এবং আপনার প্রিয় বই সস্তায়
                অর্ডার করুন!
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">03</time>
                <div className="text-lg font-black">
                  সহজ এবং দ্রুত প্রক্রিয়া
                </div>
                আমাদের প্রক্রিয়া অত্যন্ত সহজ এবং দ্রুত, আপনার অভিজ্ঞান
                সুবিধাজনক করতে সাহায্য করতে। আপনি চাইলে সরাসরি আমাদের অনলাইন
                প্ল্যাটফর্মে প্রবেশ করতে পারেন এবং আপনার প্রিয় বই বা অন্যান্য
                পণ্য বাছাই করতে পারেন। আমাদের ব্যবহারকারী-বন্ধুত্বপূর্ণ
                ইন্টারফেসের মাধ্যমে আপনি সহজেই আপনার বিশেষজ্ঞতা এবং আগ্রহের
                ভিত্তিতে বই বা অন্যান্য প্রস্তুতি করতে পারেন। অত্যন্ত
                সাজেশনগুলির মাধ্যমে এবং পুরাতন বা নতুন প্রকারের বই দেখতে এবং
                তাদের রেটিং এবং সম্মেলন দেখতে পারবেন। আমাদের নিজস্ব এবং
                নির্ভরযোগ্য প্রদানকারী পার্টনারদের সাথে সহযোগিতা করে, আমরা দ্রুত
                এবং নির্ভরযোগ্যভাবে প্রোডাক্ট পরিচালনা, চয়ন এবং বিতরণ সরবরাহ
                করতে সক্ষম। আপনি একটি বা একাধিক বই বা পণ্য একসাথে অর্ডার করতে
                পারেন, এবং আমরা আপনার কাছে আপনার পছন্দের প্রোডাক্টগুলি পৌঁছাতে
                আগ্রহী। সামগ্রিকভাবে, আমরা আপনাদের জন্য একটি সহজ এবং দ্রুত
                কেনাকাটা প্রক্রিয়া সরবরাহ করতে গর্বিত।
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">04</time>
                <div className="text-lg font-black">
                  সারা বাংলাদেশে ডেলিভারি
                </div>
                আমরা সারা বাংলাদেশে ডেলিভারি সেবা প্রদান করে থাকি, আপনার পছন্দের
                প্রোডাক্টগুলি আপনার ঠিকানায় পৌঁছাতে। আমাদের প্রযুক্তি ও
                লজিস্টিকস সম্মতিতে, আমরা দ্রুত এবং নির্ভরযোগ্যভাবে আমাদের
                গ্রাহকদের জন্য পণ্য ডেলিভারি করতে পারি। যেকোনো অঞ্চলে, বড় শহর
                বা ছোট গ্রামে, আমরা আপনার অর্ডারকৃত পণ্যগুলি দ্রুত এবং
                সুরক্ষিতভাবে পৌঁছাতে দেওয়ার জন্য সমর্থ। আমাদের প্রযুক্তি দ্বারা
                আপনি আপনার ডেলিভারি স্ট্যাটাস ট্র্যাক করতে পারেন এবং আপনি যদি
                কোনো সমস্যা বা প্রশ্ন পরিস্থিতি পান, তবে আপনি সরাসরি আমাদের সাথে
                যোগাযোগ করতে পারেন। আমরা একটি সুবিধাজনক এবং বিশেষজ্ঞ টীম সহ সব
                ধরণের গ্রাহকের চিন্তা এবং চিন্তার সাথে মিলিয়ে চলতে পারেন,
                তাত্ক্ষণিকভাবে তাদের সমাধান করে এবং আমাদের গ্রাহকদের জন্য
                শ্রেষ্ঠ সেবা দেওয়ার জন্য প্রবৃদ্ধি করতে চেষ্টা করতে।
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">05</time>
                <div className="text-lg font-black">বই দান করারা সুযোগ</div>
                বই দান একটি অসম্ভাব্য উপহার, যা জ্ঞান এবং সৃজনশীলতা বৃদ্ধি করতে
                সাহায্য করতে পারে। এটি একটি মানবিক অবদান যা সমাজে একটি শিক্ষার
                সার্থক বাতায়ন তৈরি করতে সাহায্য করে এবং বিভিন্ন বিষয়বস্তু এবং
                ধারণার বৃদ্ধি করে। বই দান একটি প্রতিষ্ঠানের পক্ষ থেকে একটি
                সামাজিক দান, যা শিক্ষার সার্থকতা ও সমৃদ্ধির দিকে একটি
                গুরুত্বপূর্ণ ধারণা অনুবাদ করে। বই দান সুযোগ প্রদান করতে হলে,
                আপনি প্রিয় বইগুলি এবং আপনার শখের লোকের মধ্যে এই সুযোগটি বিতরণ
                করতে পারেন। এটি একটি স্থায়ী লাভবান বৃদ্ধির উপায়, আপনার
                সম্প্রদায় ও সামাজিক পরিবেশে শিক্ষা এবং সাহায্যের প্রতি আপনার
                সমর্থন প্রদান করতে একটি অদৃশ্য প্রভাবও থাকতে পারে। একইভাবে, বই
                দান সংস্কৃতি এবং ভাষার বিকাশের জন্য একটি মৌল্যবান যাত্রা হতে
                পারে, যাতে লোকবল এবং সম্প্রদায় বিচরণ করতে সাহায্য করতে পারে।
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* contact us */}
      <div className="container mx-auto mb-20">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">আমাদের সায়ে যুক্ত থাকুন!</h1>
              <p className="py-6">
                আপনার মূন্যবান মতামত দিয়ে আমাদেরকে সাহায্য করুন। কি করে আমারা
                আরো বেশি মানুষকে সাহয্য করতে পারি ? করে করে আরো বেশি মানুষের
                নিকট পৌঁছাতে েপারি। কি করে আরো কম মূল্যে মানুষকে ভালো সার্বিস
                দিতে পারি ? আপনার যত মতামত, প্রশ্ন যা কিছু সব আমাদের সাথে শেয়ার
                করেন। আমারা সবসময় প্রস্তুত আমনার মতামত যাচাই করতে। <br />
                ধন্যবাদ💌
              </p>
            </div>

            <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-50">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input border-primary bg-white text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Message</span>
                  </label>
                  <textarea
                    className="textarea border-primary bg-white textarea-primary text-white"
                    placeholder="message..."
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
