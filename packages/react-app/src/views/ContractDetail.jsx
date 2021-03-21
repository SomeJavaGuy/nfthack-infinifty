/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";

export default function ContractDetail({purpose, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const [newPurpose, setNewPurpose] = useState("loading...");

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{border:"1px solid #cccccc", padding:16, width:400, margin:"auto",marginTop:64,marginBottom:64}}>
        <h2>Setup Artwork Contract</h2>

        {/*
        <h4>{purpose}</h4>
        */}

        <img width="360" src='/images/Logo.png' alt="" />
        <br />
        <Input placeholder="Title" />
        {/*
        <Divider/>

        <div style={{margin:8}}>
          <Input onChange={(e)=>{setNewPurpose(e.target.value)}} />
          <Button onClick={()=>{
            console.log("newPurpose",newPurpose)
            // look how you call setPurpose on your contract:
            tx( writeContracts.YourContract.setPurpose(newPurpose) )
          }}>Update Title</Button>
        </div>

        */}

        <Divider />
        <label for="cars">Select a beneficiary for royalties: </label><br />
        <select name="cars" id="cars">
            <option value="1">Bill & Melinda Gates Foundation</option>
            <option value="2">charity:Water</option>
            <option value="3">Share a Meal</option>
            <option value="3">UNICEF</option>
        </select>

        <Divider/>

        <div>Set Royalty Percentage:</div>
        <Input placeholder="Royalty Percentage" />

        <Divider/>

          <Button type="primary" onClick={()=>{
            //console.log("newPurpose","Minted!")
            //tx( writeContracts.YourContract.setPurpose(newPurpose) );
            window.location.href='/';
          }}>Mint</Button>
        {/*

        <div style={{margin:8}}>
          <Button onClick={()=>{
            //* look how we call setPurpose AND send some value along 
            tx( writeContracts.YourContract.setPurpose("💵 Paying for this one!",{
              value: parseEther("0.001")
            }))
            //* this will fail until you make the setPurpose function payable 
          }}>Set Purpose With Value</Button>
        </div>


        <div style={{margin:8}}>
          <Button onClick={()=>{
            //* you can also just craft a transaction and send it to the tx() transactor 
            tx({
              to: writeContracts.YourContract.address,
              value: parseEther("0.001"),
              data: writeContracts.YourContract.interface.encodeFunctionData("setPurpose(string)",["🤓 Whoa so 1337!"])
            });
            //* this should throw an error about "no fallback nor receive function" until you add it 
          }}>Another Example</Button>
        </div>
        */}

      </div>


    </div>
  );
}
