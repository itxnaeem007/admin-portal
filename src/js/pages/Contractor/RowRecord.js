import React, { useState, useEffect } from "react";
import { useStylePanel } from "./style";

function RowRecord(props) {
  const { dataObj } = props;
  const classes = useStylePanel();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(dataObj);
  console.log("dataObj", data);
  return (
    <div
      className="inner-table"
      style={{
        border: "1px solid gray",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <div className={classes.root}>
        <div>
          <h3>User Picture</h3>
          <img
            width="320"
            height="240"
            src={`https://gateway.ipfs.io/ipfs/${data.picture}`}
            alt=""
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <h3>User Video</h3>
          <video width="320" height="240" controls>
            <source
              src={`https://gateway.ipfs.io/ipfs/${data.video}`}
              type="video/webm"
            />
            <source
              src={`https://gateway.ipfs.io/ipfs/${data.video}`}
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>{" "}
        </div>
        {data.witness_video !== "" && (
          <div style={{ marginLeft: "10px" }}>
            <h3>Witness Video</h3>
            <video width="320" height="240" controls>
              <source
                src={`https://gateway.ipfs.io/ipfs/${data.witness_video}`}
                type="video/webm"
              />
              <source
                src={`https://gateway.ipfs.io/ipfs/${data.witness_video}`}
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>{" "}
          </div>
        )}
        <div style={{ marginLeft: "10px" }}>
          <h3>User Signature</h3>
          <img
            width="320"
            height="240"
            style={{ border: "1px solid gray" }}
            className={"border"}
            src={`https://gateway.ipfs.io/ipfs/${data.signature}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default RowRecord;
