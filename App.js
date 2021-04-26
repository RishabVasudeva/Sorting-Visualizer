import React from 'react'
import './App.css';

const TOTAL_BARS=12;
var arr=[];

export default class App extends React.Component{

constructor (props){

super(props);

this.state= { 
    arr:[],
    comp:[],
    sorted:[]
}

}

componentDidMount(){
    this.resetArray();
}



resetArray()
{
    const arr=[];
    for(let i=0;i<TOTAL_BARS;i++)
    {
        arr.push(generateRandomNumber(40,500));
    }
    this.setState({arr});
}



bubbleSort(){
    arr=[...this.state.arr]
    let count = 0
   // console.log(arr)
     let dummyarr=[]
     let dcomp=[]

    for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1])
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      dummyarr.push([...arr])
      dcomp.push([j,j+1])
      setTimeout(()=>{this.setState({arr : dummyarr[count],comp : dcomp[count++]})},i*500)
      }
      
    }

}

render(){
   // const arr =this.state;
   console.log(this.state)
    return( 
        <div className="showArray">
            {
                this.state.arr.map((value,index)=> 
                (<div
                className="bars"
                key={index}
                style={{
                    backgroundColor:'orange',
                    height:`${value}px`,
                }}><p>{value}</p></div>))
            }
            <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={()=> this.bubbleSort()}>BUbble Sort</button>
        </div>
    );
}

}

function generateRandomNumber(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}