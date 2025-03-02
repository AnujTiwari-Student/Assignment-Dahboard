import React from "react";
import CountryWiseIntensity from "./charts/CountryWiseIntensity";
import EndYearWiseIntensity from "./charts/EndYearWiseIntensity";
import LikelihoodWiseIntensity from "./charts/LikelihoodWiseIntensity";
import PestleWiseIntensity from "./charts/PestleWiseIntensity";
import CountryWiseOccurrences from "./charts/CountryWiseOccurences";
import AverageRelevanceByTopic from "./charts/AverageRelevanceByTopic";
import NumberOfInsightsBySource from "./charts/NumberOfInsightsBySource";
import AverageLikelihoodByRegion from "./charts/AverageLiklihoodByRegion";
import InsightsByYear from "./charts/InsightsByYear";
import OccurrencesByPestle from "./charts/OccurenceOfPestlyByCategory";
import OccurrencesBySector from "./charts/OccurencesBySector";
import OccurrencesByTopic from "./charts/OccurencesByTopics";

export default function Main({ data }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AverageLikelihoodByRegion data={data} />
      <AverageRelevanceByTopic data={data} />
      <CountryWiseIntensity data={data} />
      <CountryWiseOccurrences data={data} />
      <EndYearWiseIntensity data={data} />
      <InsightsByYear data={data} />
      <LikelihoodWiseIntensity data={data} />
      <NumberOfInsightsBySource data={data} />
      <OccurrencesByPestle data={data} />
      <OccurrencesBySector data={data} />
      <OccurrencesByTopic data={data} />
      <PestleWiseIntensity data={data} />
    </div>
  );
}
