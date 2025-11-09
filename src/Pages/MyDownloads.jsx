import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ModelCard } from "../Components/ModelCard";

const MyDownloads = () => {
  const { user, loading } = use(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`https://3-d-models-server.vercel.app/my-downloads`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      });
  }, [user]);

  //   useEffect(() => {
  //     fetch(`https://3-d-models-server.vercel.app/my-downloads?email=${user.email}`, {
  //       headers: {
  //         authorization: `Bearer ${user.accessToken}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setModels(data);
  //       });
  //   }, [user]);

  if (loading) {
    return <div> Please wait ... Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default MyDownloads;
