import { useEffect, useState } from "react";
import data from "../datas/emoji.json";
import style from "./emoji.module.css";
const Emojis = () => {
  const [emojidata, setEmojidata] = useState([]);
  const [search, setSearch] = useState("");
  const [filterEmoji, setFilterEmoji] = useState([]);

  useEffect(() => {
    setEmojidata(data);
    // console.log(data)
    setFilterEmoji(data);
  }, []);

  useEffect(() => {
    let temp = [...emojidata];
    temp = temp.filter((item) => {
      let emoji = item.title.toLowerCase();

      if (emoji.includes(search)) {
        return true;
      }
    });
    setFilterEmoji(temp);
  }, [search]);

  // const getdata = () => {
  //   const newdata=[...emojidata]
  //   console.log(newdata)
  // }

  return (
    <>
      <div className={style.data}>
        <h1 style={{ color: "red", textDecoration: "underline" }}>
          Search emoji
        </h1>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        {filterEmoji.map((item) => {
          return (
            <div key={item.keywords}>
              <span>
                {item.title}
                {item.symbol}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Emojis;
