//import dependencies
import React from "react";

//import custom-component
import VideoItem from "../video_item";

//import snapshot-testing methods
import renderer from "react-test-renderer";

describe("VideoItem", () => {
  const video = {
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
  };
  const display = "list";

  it("renderer", () => {
    const component = renderer
      .create(
        <VideoItem video={video} onVideoClick={jest.fn()} display={display} />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
