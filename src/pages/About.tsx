import Lottie from 'lottie-react';
import donation from '../assets/images/donation.json';
import sale from '../assets/images/sale.json';
import book from '../assets/images/bookHero.json';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 container mx-auto">
      <div className="flex items-center justify-center flex-wrap">
        <Lottie className="w-1/5" animationData={donation} />
        <Lottie className="w-1/5" animationData={book} />
        <Lottie className="w-1/5" animationData={sale} />
      </div>
      <p className="text-lg">
        বইপ্রেমীদের জন্য এক অনন্য উদ্যোগ বই বিনিময় একটি অনলাইন প্ল্যাটফর্ম
        যেখানে আপনি আপনার পুরাতন বইগুলো অর্ধেক দামে বিক্রি করতে পারেন। আমাদের
        লক্ষ্য হলো বইপ্রেমীদের জন্য একটি সস্তা এবং সহজ উপায়ে বই কেনার সুযোগ
        তৈরি করা। বই বিনিময়-এ আপনি যেকোনো ধরনের পুরাতন বই বিক্রি করতে পারেন।
        আপনার বইটি যদি ভালো অবস্থায় থাকে, তাহলে আপনি ভালো দাম পাবেন। আমরা
        বইয়ের অবস্থা দেখে দাম নির্ধারণ করি। বই বিনিময়-এ বই বিক্রি করা খুবই
        সহজ। আপনাকে শুধুমাত্র আপনার বইয়ের ছবি এবং বিবরণ আমাদের ওয়েবসাইটে আপলোড
        করতে হবে। আমরা আপনার বইটি যাচাই করে দাম নির্ধারণ করব এবং আপনার কাছে
        বিক্রির জন্য প্রস্তাব করব। আপনি যদি আমাদের প্রস্তাব গ্রহণ করেন, তাহলে
        আমরা আপনার বইটি ডেলিভারি করব। বই বিনিময়-এ বই কেনা খুবই সহজ। আপনি আমাদের
        ওয়েবসাইটে আপনার পছন্দের বইগুলি খুঁজে পেতে পারেন এবং সেগুলি অর্ডার করতে
        পারেন। আমরা আপনার কাছে বইটি ডেলিভারি করব। বই বিনিময়-এ যুক্ত হন এবং
        আপনার পুরাতন বইগুলো বিক্রি করে অন্যদের কাছে নতুন জীবন দিন।
      </p>
      <div className="flex gap-3 flex-wrap">
        <h4 className="text-3xl font-bold">বুজ ব্রিজ-এর সুবিধা:</h4>
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
              আপনি যদি আপনার পুরাতন বইগুলি অর্ধেক দামে বিক্রি করতে চান, তাহলে এই
              অদ্ভুত অফারটি অবশ্যই চেষ্টা করুন। আমাদের সম্মানিত গ্রাহকদের জন্য
              সুবিধাজনক এই অফারের মাধ্যমে, আপনি পুরাতন এবং মূল্যবান বইগুলি
              অর্ধেক মূল্যে পেতে পারবেন। এটি আপনার পছন্দের বইগুলি উপভোগ করার
              সুযোগ প্রদান করতে এবং আপনার বই সংকলনকে একটি নতুন স্তরে তৈরি করতে
              এই সুযোগটি মিস করবেন না। এখানে আপনি আপনার প্রিয় লেখকের সৃষ্টিতি
              পুরাতন এবং ক্লাসিক বই পাবেন, এবং সেগুলি অর্ধেক মূল্যে উপভোগ করতে
              পারবেন।
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
              বুদ্ধিমত্তা, আত্মবিশ্বাস এবং জ্ঞানবান হওয়ার জন্য এখানে এসে নিন এবং
              সস্তায় বই পেতে হলে তার একটি অমুল্য সুযোগ হতে দিন। আপনার ভাষার চয়ন
              করুন, একটি কলেকশন তৈরি করুন এবং জ্ঞানের আবেগ নিয়ে অহংকার করুন,
              কারণ এখানে আপনি প্রযুক্তি, উপন্যাস, রোমান্টিক, গল্প, অনুবাদ,
              ইতিহাস, বিজ্ঞান, ও অনেক বিভিন্ন ধরনের বই পাবেন। স্টক শেষ না হয়,
              তাই সত্যিই এখনই এবং আপনার প্রিয় বই সস্তায় অর্ডার করুন!
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
              <div className="text-lg font-black">সহজ এবং দ্রুত প্রক্রিয়া</div>
              আমাদের প্রক্রিয়া অত্যন্ত সহজ এবং দ্রুত, আপনার অভিজ্ঞান সুবিধাজনক
              করতে সাহায্য করতে। আপনি চাইলে সরাসরি আমাদের অনলাইন প্ল্যাটফর্মে
              প্রবেশ করতে পারেন এবং আপনার প্রিয় বই বা অন্যান্য পণ্য বাছাই করতে
              পারেন। আমাদের ব্যবহারকারী-বন্ধুত্বপূর্ণ ইন্টারফেসের মাধ্যমে আপনি
              সহজেই আপনার বিশেষজ্ঞতা এবং আগ্রহের ভিত্তিতে বই বা অন্যান্য
              প্রস্তুতি করতে পারেন। অত্যন্ত সাজেশনগুলির মাধ্যমে এবং পুরাতন বা
              নতুন প্রকারের বই দেখতে এবং তাদের রেটিং এবং সম্মেলন দেখতে পারবেন।
              আমাদের নিজস্ব এবং নির্ভরযোগ্য প্রদানকারী পার্টনারদের সাথে সহযোগিতা
              করে, আমরা দ্রুত এবং নির্ভরযোগ্যভাবে প্রোডাক্ট পরিচালনা, চয়ন এবং
              বিতরণ সরবরাহ করতে সক্ষম। আপনি একটি বা একাধিক বই বা পণ্য একসাথে
              অর্ডার করতে পারেন, এবং আমরা আপনার কাছে আপনার পছন্দের প্রোডাক্টগুলি
              পৌঁছাতে আগ্রহী। সামগ্রিকভাবে, আমরা আপনাদের জন্য একটি সহজ এবং দ্রুত
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
              <div className="text-lg font-black">সারা বাংলাদেশে ডেলিভারি</div>
              আমরা সারা বাংলাদেশে ডেলিভারি সেবা প্রদান করে থাকি, আপনার পছন্দের
              প্রোডাক্টগুলি আপনার ঠিকানায় পৌঁছাতে। আমাদের প্রযুক্তি ও লজিস্টিকস
              সম্মতিতে, আমরা দ্রুত এবং নির্ভরযোগ্যভাবে আমাদের গ্রাহকদের জন্য
              পণ্য ডেলিভারি করতে পারি। যেকোনো অঞ্চলে, বড় শহর বা ছোট গ্রামে,
              আমরা আপনার অর্ডারকৃত পণ্যগুলি দ্রুত এবং সুরক্ষিতভাবে পৌঁছাতে
              দেওয়ার জন্য সমর্থ। আমাদের প্রযুক্তি দ্বারা আপনি আপনার ডেলিভারি
              স্ট্যাটাস ট্র্যাক করতে পারেন এবং আপনি যদি কোনো সমস্যা বা প্রশ্ন
              পরিস্থিতি পান, তবে আপনি সরাসরি আমাদের সাথে যোগাযোগ করতে পারেন।
              আমরা একটি সুবিধাজনক এবং বিশেষজ্ঞ টীম সহ সব ধরণের গ্রাহকের চিন্তা
              এবং চিন্তার সাথে মিলিয়ে চলতে পারেন, তাত্ক্ষণিকভাবে তাদের সমাধান
              করে এবং আমাদের গ্রাহকদের জন্য শ্রেষ্ঠ সেবা দেওয়ার জন্য প্রবৃদ্ধি
              করতে চেষ্টা করতে।
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
              ধারণার বৃদ্ধি করে। বই দান একটি প্রতিষ্ঠানের পক্ষ থেকে একটি সামাজিক
              দান, যা শিক্ষার সার্থকতা ও সমৃদ্ধির দিকে একটি গুরুত্বপূর্ণ ধারণা
              অনুবাদ করে। বই দান সুযোগ প্রদান করতে হলে, আপনি প্রিয় বইগুলি এবং
              আপনার শখের লোকের মধ্যে এই সুযোগটি বিতরণ করতে পারেন। এটি একটি
              স্থায়ী লাভবান বৃদ্ধির উপায়, আপনার সম্প্রদায় ও সামাজিক পরিবেশে
              শিক্ষা এবং সাহায্যের প্রতি আপনার সমর্থন প্রদান করতে একটি অদৃশ্য
              প্রভাবও থাকতে পারে। একইভাবে, বই দান সংস্কৃতি এবং ভাষার বিকাশের
              জন্য একটি মৌল্যবান যাত্রা হতে পারে, যাতে লোকবল এবং সম্প্রদায়
              বিচরণ করতে সাহায্য করতে পারে।
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
