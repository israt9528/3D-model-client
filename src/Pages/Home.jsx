import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import { ModelCard } from "../Components/ModelCard";

const Home = () => {
  const models = useLoaderData();
  // console.log(models);

  return (
    <div>
      <Banner></Banner>

      <div className="text-center text-xl font-bold mt-10">Latest Model</div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {models.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default Home;
