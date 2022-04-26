//import dependencies
import React from "react";

//import custom-component
import VideoDetail from "../video_detail";

// import snapshot-testing methods
import renderer from "react-test-renderer";

describe("VideoDetail", () => {
  const video = {
    id: "cheYIVEtVQ4",
    snippet: {
      title: "Test Title",
      description: "Test Desciption",
      channelTitle: "TestCode is good",
      defaultAudioLanguage: "en",
    },
  };

  it("renders", () => {
    const component = renderer.create(<VideoDetail video={video} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
