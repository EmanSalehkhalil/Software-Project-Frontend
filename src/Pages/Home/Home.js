import React from 'react'
import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import SingleContent from '../../components/SingleContent/SingleContent';
import Header from '../../components/Header/Header';
// import CustomPagination from "../../components/Pagination/CustomPagination";

const Home = () => {
  const [content, setContent] = useState([]);

  const fetchTickets = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/tickets/"
    );
    // console.log(data.tickets)

    setContent(data.tickets); 
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTickets();
  }, []);

  return (
    <div>
      {/* <span className="pageTitle">Trending Today</span> */}
      <Header/>
      <div className="Tickets">
          {content && content.map((c) => (
          <SingleContent
           key={c._id}
           id={c._id}
           roundNumber={c.roundNumber}
           pending_category1_count={c.pending_category1_count}
           pending_category2_count={c.pending_category2_count}
           pending_category3_count={c.pending_category3_count}
           matchNumber={c.matchNumber}
           location={c.location}
           homeTeam={c.homeTeam}
           group={c.group}
           dateUtc={c.dateUtc}
           awayTeam={c.awayTeam}
           category1_price={c.availability.category1.price}
           category2_price={c.availability.category2.price}
           category3_price={c.availability.category3.price}
           category1_count={c.availability.category1.count}
           category2_count={c.availability.category2.count}
           category3_count={c.availability.category3.count}



          />
        ))}
       </div>
    </div>
  );
};

export default Home;






