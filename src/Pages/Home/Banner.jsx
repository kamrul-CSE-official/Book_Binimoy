import { useEffect, useState } from "react";

export default function Banner() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (second === 60) {
      setSecond(0);
    }
    const intervalId = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://graceful-twilight-84f500.netlify.app/static/media/banner.6d40544ae08722b22ef4.jpg"
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">
            আমাদের সকল বইয়ে থাকছে <span className="text-green-600">১৫%</span>{" "}
            ডিসকাউন্ট 😍 ।
          </h1>
          <p className="py-6">
            বই কিনে কেউ কখন দরিদ্র হয় না। বই মানুষের মনে উৎসতা বৃদ্বি করে।
            মুনষকে মহৎ করে তোলে। এক জন বই পাঠক কখনও উগ্র হতে পারে না। বই প্রেকিম
            গড়ে উঠুক বাংলার প্রতিটি ঘরে ঘরে এটাই আমাদের এক মাত্র লক্ষ।
          </p>
          <div>
            <div className="flex gap-5 font-extrabold">
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": second }}></span>
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
