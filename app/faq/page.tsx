import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Logos from "@/components/Logos";

const faq = () => {
  const faqData = [
    {
      title: "Eu dictumst cum at sed euismood condimentum?",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      title: "Magna bibendum est fermentum eros.",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      title: "Odio muskana hak eris conseekin sceleton?",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      title: "Elit id blandit sabara boi velit gua mara?",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
  ];

  return (
    <>
      <div>
        <div>
          <Heading heading="FAQ" path1="Home" path2="Pages" path3="Faq" />
        </div>

        <div className="lg:px-14 px-3">
          <div className="md:container md:px-[1.3rem] px-[.8rem] md:grid grid-cols-2 gap-16 md:mt-32 mt-12 mb-10 md:mb-32">
            <div className="">
              <h2 className="text-[#1D3178] md:text-4xl text-2xl font-[800] ">
                Generel Information
              </h2>

              <div className="">
                {faqData.map((item,i) => {
                  return (
                    <div key={i}>
                      <div className="my-6 md:my-16">
                        <h3 className="text-[#1D3178] font-bold ">
                          {item.title}
                        </h3>
                        <h4 className="text-[#A1ABCC] set_lato md:mt-4">
                          {item.des}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#F8F8FD] rounded-md lg:w-[566px] sm:w-[400px] ">
              <h3 className="text-[#1D3178] font-bold text-[24px] md:p-12 p-2 pt-5  mt-5">
                Ask a Question
              </h3>
              <div className="mt-4 md:p-12 p-2 pb-7">
                <input
                  className="border-gray-300 border-2 h-[50px] rounded-md w-full md:my-6 my-4"
                  placeholder="Your Name"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className="border-gray-300 border-2 h-[50px] rounded-md w-full md:my-6"
                  placeholder="Subject*"
                  type="text"
                  name=""
                  id=""
                />
                <textarea
                  className="w-full border-gray-300 border-2 h-[197px] rounded-md md:my-6 my-4"
                  placeholder="Type Your Message*"
                  name="comment"
                  form="usrform"
                ></textarea>

                <Button text="Send Mail" />
              </div>
            </div>
          </div>

          {/* <div className="container px-[1.3rem] flex justify-center mb-[32px]">
            <Image width={1000} height={1000} src="/banner2.png" alt="" />
          </div> */}
        </div>
      </div>
      <div>
        <Logos />
      </div>
    </>
  );
};

export default faq;
