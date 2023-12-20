import { useEffect, useState } from "react";
import bannerImg from "../../assets/bannerImg.jpg";

export default function Banner() {
  const [time, setTime] = useState({ minutes: 30, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
        const newMinutes =
          newSeconds === 59 ? prevTime.minutes - 1 : prevTime.minutes;

        return {
          minutes: newMinutes < 0 ? 20 : newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
        <img src={bannerImg} className="rounded-lg shadow-2xl" />
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold lg:whitespace-nowrap">
            আমাদের সকল বইয়ে থাকছে <span className="text-green-600">১৫%</span>{" "}
            ছাঁড়!🔖
          </h1>
          <p className="py-6">
            বই কিনে কেউ কখন দরিদ্র হয় না। বই মানুষের মনে উৎসতা বৃদ্বি করে।
            মানুষকে মহৎ করে তোলে। এক জন বই পাঠক কখনও উগ্র হতে পারে না। বই
            প্রেমিক গড়ে উঠুক বাংলার প্রতিটি ঘরে ঘরে এটাই আমাদের এক মাত্র লক্ষ।
          </p>
          <div className="flex items-center justify-center">
            <div className="flex gap-5 font-extrabold">
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 4 }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 2 }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": time.minutes % 60 }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": time.seconds }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
