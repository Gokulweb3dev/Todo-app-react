import React, { useEffect, useRef, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import List from "./List";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';








const Todo = () => {
  const [list, setList] = useState(
    localStorage.getItem("save") ? JSON.parse(localStorage.getItem("save")) : []
  );
  const [inc,setinc]=useState(0);



  const input = useRef();
  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(list));
  }, [list]);

  const add = () => {
    const value = input.current.value.trim();
    const newitem = {
      id: Date.now(),
      txt: value,
      iscomplete: false,
    };
    toast(`new task added ${value}`);
    setinc(list.filter(item => !item.iscomplete).length);
    setinc(pre=>pre+1);


    setList((pre) => [...pre, newitem]);

    input.current.value = "";
  };
  const deltodo = (id) => {
    const del=list.filter((item) => item.id == id)
    setList(list.filter((item) => item.id !== id));
    console.log(del[0].txt);
    toast.error(` task deleted << ${del[0].txt}`);
  };
  const toggle = (id) => {

    setList(
      list.map((ind) => {
        if (ind.id === id) {
          return { ...ind, iscomplete: !ind.iscomplete };
        } else {
          return ind;
        }
      })
    );
        setinc(list.filter(item => !item.iscomplete).length);
        setinc(pre=>pre+1);
  };


  return (
    <div className="bg-rose-300 place-self-center w-screen max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="h-20 flex ">
        <div className="w-28 flex flex-col bg-white">
          <span className="font-bold text-xl ">Total Task</span>
          <span className=" px-10 pt-1 text-4xl">{list.length}</span>
        </div>
       
    <div className="w-full max-w-64 h-20 bg-slate-400"> {/* 👈 Set fixed height here */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="h-full" // 👈 Make Swiper take full height
      >
     
        <SwiperSlide>
          <div className="w-full max-w-64 h-full text-2xl bg-green-300 flex items-center justify-center">
            {`Task completed = ${list.length-inc}`}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-64 h-full text-2xl bg-red-700 text-white flex items-center justify-center">
            {`Task uncompleted = ${inc}`}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>


      </div>
      <div className="flex items-center justify-center mt-7 gap-2">
        <FaClipboardList className="text-3xl" />
        <h1 className="text-3xl font-semibold">TODO APP</h1>
      </div>
      <div className="flex items-center my-5 gap-2 bg-emerald-100 rounded-full ml-2">
        <input
          ref={input}
          className="bg-transparent h-8 flex-1 px-2 border-0 outline-none"
          type="text"
          placeholder="enter task"
        />
        <button
          onClick={add}
          className="rounded-full bg-gray-300 text-xl font-bold h-8 w-20"
        >
          ADD
        </button>
      </div>
      {list.map((item, i) => {
        return (
          <List
            key={i}
            txt={item.txt}
            id={item.id}
            toggle={toggle}
            deltodo={deltodo}
            iscomplete={item.iscomplete}
          />
        );
      })}
      <ToastContainer/>
    </div>
  );
};

export default Todo;
