import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import Header from "../components/ui/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const algoliaAppId = process.env.REACT_APP_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.REACT_APP_API_KEY;

const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);

function Hit({ hit }) {
  return (
    <div className="mb-4 rounded-md border border-gray-300 p-4">
      <Card>
        <CardHeader>
          <CardTitle>{hit.Collection}</CardTitle>
        </CardHeader>
        <CardContent className="flex">
          <img className="h-24" src={hit.Image} alt={hit.Collection} />
          <div>
            <p>
              Fabric: <Highlight attribute="Fabric"  hit={hit} />
            </p>
            <p>
              Technique: <Highlight attribute="Technique" hit={hit} />
            </p>
            <p>
              Painter: <Highlight attribute="Painter" hit={hit} />
            </p>
            <p>
              Vase Type: <Highlight attribute="Vase Type" hit={hit} />
            </p>
            <p>
              Vase Number: <Highlight attribute="Vase Number" hit={hit} />
            </p>
            <p>
              Collection: <Highlight attribute="Collection" hit={hit} />
            </p>
            <p>
              Provenance: <Highlight attribute="Provenance" hit={hit} />
            </p>
            <p>
              Height: <Highlight attribute="Height" hit={hit} />
            </p>
            <p>
              Diameter: <Highlight attribute="Diameter" hit={hit} />
            </p>
            <p>
              Publications: <Highlight attribute="Publications" hit={hit} />
            </p>
            <CardDescription>
              Description: <Highlight attribute="Description" hit={hit} />
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const BasicSearch = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-4xl p-6">
        <h2 className="mb-4 text-2xl font-bold">Basic Search</h2>
        <InstantSearch searchClient={searchClient} indexName="artefacts">
          <SearchBox classNames="px-5 py-5" />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    </div>
  );
};

export default BasicSearch;
