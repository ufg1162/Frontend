import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import LogDay from "./logDay";
import ViewbyDate from "./viewbyDate";

import {LineChart,Line,BarChart,Bar,PieChart,Pie,Legend,Cell,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer, Label} from "recharts";

function ViewData() {

    const [viewBy, setViewBy] = useState(true);
    const[finalList,setFinalList]= useState([])
    
    var new_list=[];
    var quest = [];
  

    const handleviewQ = (e) => {
      setViewBy(true);
    }
    const handleviewD = (e) => {
      setViewBy(false);
    }
    
  
  useEffect(() => {
    axios.get('/api/logs')
      .then(function (res){
        
        console.log("res.data");
        console.log(res.data);
      
        console.log("------------------------------------------");

        
        for (let i=0; i<res.data.length; i++){
              quest[i] = res.data[i].questions;
        }
        console.log(quest);

      
        console.log("------------------------------------------");
        quest.map((quest_day)=>{
          quest_day.map((questions_list)=>{
            
            let ind= new_list.findIndex((new_item)=> questions_list.question == new_item.que )

            if (ind==-1){
              new_list.push({que:questions_list.question, type:questions_list.type, response:[{date:questions_list.date_inside, answer:questions_list.answer}]})
              setFinalList(new_list);
            }
            else{
              
              let updated_item= {...new_list[ind], response:[...new_list[ind].response ,{date:questions_list.date_inside, answer:questions_list.answer}]}
              new_list[ind]=updated_item;
              setFinalList(new_list);
            
            }

          })

      }
      
      )
    
      console.log(new_list)
      
      })
      .catch((err)=> {
          console.log("error getting logs");
      
      })
  },[])
    
    
    return(
        
      <>
        
        
        <div className="view_form" id="top_form" style={{ justifyContent: "space-between" }}>
         <div><span id="editQuestion" className="menu-choice" onClick={handleviewQ}>View by Question</span></div> 
         <div><span id="editQuestion" className="menu-choice" onClick={handleviewD}>View by date</span></div>
         <div><span id="editQuestion" className="menu-choice" >Download Data</span></div>
         <div>{finalList.length}</div>
        </div>
        
        
        <div>
          
        {viewBy &&
          <div>
            
            {finalList.map((qu) => {
              switch(qu.type){
                case ("number"):
                  return(
                      <div className="view_form ">
                        <div>
                          <b>{qu.que}</b> {" - "}
                          {Object.keys(qu.response).length} response(s) 
                        </div>
                        <LineChart
                          width={500}
                          height={300}
                          data={qu.response}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date"  />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="answer" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                      </div>
                  );
                      
                case ("text"):
                  return(
                    <div className="form-area ">
                      <div>
                          <b>{qu.que}</b> {" - "}
                          {Object.keys(qu.response).length} response(s) 
                      </div>
                      {qu.response.map((quu) =>
                          <div>
                            <hr />
                          <b>{quu.date }</b> {" - "} {quu.answer}
                          </div>
                        
                      
                        )}

                    </div>
                        
                    )
                
                case ("boolean"):
                  let true_false = {true: 0, false: 0};
                  
                  qu.response.map((quu) => {
                      if(quu.answer==="True"){
                        true_false[true]+=1
                      }
                      else{
                        true_false[false]+=1
                      }
                  }

                  );
                  let tf_data=[{name:"true",value:true_false[true]},{name:"false",value:true_false[false]}];
                  const COLORS = ['#0088FE', '#00C49F'];

                  return (
                    
                    <div className="view_form ">
                      <div>
                          <b>{qu.que}</b> {" - "}
                          {Object.keys(qu.response).length} response(s) 
                      </div>
                      <PieChart width={300} height={300}>
                        <Pie data={tf_data} dataKey="value" outerRadius={100} fill="#8884d8" > 
                            {tf_data.map((entry, index) => (
                            
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              
                          
                            ))}
                        </Pie>
                        <Legend
                          payload={tf_data.map((item, index) => ({
                            type: "square",
                            value: `${item.name}`,
                            color: COLORS[index % COLORS.length],
                          }))}
                        />

                      </PieChart>
                    </div>
                  );
                
                case ("multiple choice"):
                  let choice_ans = {};
                  
                  qu.response.map((quu) => {
                      if(choice_ans[quu.answer]){
                        choice_ans[quu.answer]+=1
                      }
          
                      else{
                        choice_ans[quu.answer]=1
                      }
                      }

                  );
                 
                  let choice_data = Object.entries(choice_ans).map(([key, value]) => ({choice:key, freq: value}))
                  return (
                    
                    <div className="view_form ">
                      <div>
                          <b>{qu.que}</b> {" - "}
                          {Object.keys(qu.response).length} response(s) 
                      </div>
                      <BarChart width={400} height={400} data={choice_data}>
                          <Bar dataKey="freq" fill="#00C49F" />
                          <CartesianGrid stroke="#ccc" />
                          <XAxis dataKey="choice" />
                          <YAxis />
                          <Tooltip />
                      </BarChart>
                    </div>
                  );  

              }
            }

            )}
              
          
          </div>
        }
         
		 		  {!viewBy && <ViewbyDate/>}
       
      </div>
      
     
      
    </>
        
      
		
    );
    

}

export default ViewData