// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// import custom-component
import App from "../app";

// import snapshot-testing methods
import renderer from "react-test-renderer";

describe("App", () => {
  const videos = [
    {
      id: "cheYIVEtVQ4",
      snippet: {
        title: "Test Title",
        description: "Test Desciption",
        channelTitle: "TestCode is good",
        defaultAudioLanguage: "en",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/cheYIVEtVQ4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/cheYIVEtVQ4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/cheYIVEtVQ4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/cheYIVEtVQ4/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/cheYIVEtVQ4/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
      },
    },
  ];
  let AppComponent;
  let search;
  let mostPopular;
  let selectVideo;

  beforeEach(() => {
    search = jest.fn();
    mostPopular = jest.fn();
    selectVideo = jest.fn();
    AppComponent = (
      <App
        search={search}
        mostPopular={mostPopular}
        selectVideo={selectVideo}
        videos={videos}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(AppComponent).toJSON;

    expect(component).toMatchSnapshot();
  });
});
