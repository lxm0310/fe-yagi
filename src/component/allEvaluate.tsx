import React from "react";

const AllEvaluate = () => {
  return (
    <>
      <div className="p-6 bg-background text-foreground">
        <h2 className="text-2xl font-bold mb-8">Tất cả đánh giá</h2>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-start pb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Reviewer Photo"
              className="rounded-full mr-4"
            />
            <div className="">
              <h3 className="font-semibold m-1">Phạm Lan</h3>
              <p className="text-sm text-muted-foreground m-1">18/09/2024</p>
              <div className="flex gap-2 m-1">
                <p className="text-[13px] text-center border w-[53px] h-[27px] text-[#FFFFFF] font-bold  p-1 bg-[#0460B196]">
                  4.0/5
                </p>
                <p className="text-[15px] font-bold mt-1">
                  Khách sạn đẹp vô cùng
                </p>
              </div>
              <p className="text-sm text-[#00000080]">
                Từ không gian đến tiện ích đều vô cùng hài lòng...
              </p>
            </div>
          </div>

          <div className="flex items-start  pb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Reviewer Photo"
              className="rounded-full mr-4"
            />
            <div className="">
              <h3 className="font-semibold m-1">Phạm Lan</h3>
              <p className="text-sm text-muted-foreground m-1">18/09/2024</p>
              <div className="flex gap-2 m-1">
                <p className="text-[13px] text-center border w-[53px] h-[27px] text-[#FFFFFF] font-bold  p-1 bg-[#0460B196]">
                  4.0/5
                </p>
                <p className="text-[15px] font-bold mt-1">
                  Khách sạn đẹp vô cùng
                </p>
              </div>
              <p className="text-sm text-[#00000080]">
                Từ không gian đến tiện ích đều vô cùng hài lòng...
              </p>
            </div>
          </div>
          <div className="flex items-start  pb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Reviewer Photo"
              className="rounded-full mr-4"
            />
            <div className="">
              <h3 className="font-semibold m-1">Phạm Lan</h3>
              <p className="text-sm text-muted-foreground m-1">18/09/2024</p>
              <div className="flex gap-2 m-1">
                <p className="text-[13px] text-center border w-[53px] h-[27px] text-[#FFFFFF] font-bold  p-1 bg-[#0460B196]">
                  4.0/5
                </p>
                <p className="text-[15px] font-bold mt-1">
                  Khách sạn đẹp vô cùng
                </p>
              </div>
              <p className="text-sm text-[#00000080]">
                Từ không gian đến tiện ích đều vô cùng hài lòng...
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Thêm đánh giá</h2>
        <p className="text-sm text-muted-foreground">
          Địa chỉ email của bạn sẽ được bảo mật.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Đánh giá chung</label>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-zinc-300">⭐</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Dịch vụ</label>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Giá cả</label>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Không gian</label>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Tiện ích</label>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-zinc-300">⭐</span>
              <span className="text-zinc-300">⭐</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Thiết kế</label>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-zinc-300">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvaluate;
