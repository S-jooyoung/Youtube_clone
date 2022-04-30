//import dependencies
import React from "react";

//import custom-component
import VideoList from "../video_list";

//import snapshot-testing methods
import renderer from "react-test-renderer";

//import component-testing methods
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("VideoList", () => {
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
  const display = "list";
  let onVideoClick;
  let VideoListComponent;

  beforeEach(() => {
    onVideoClick = jest.fn();
    VideoListComponent = (
      <VideoList
        videos={videos}
        onVideoClick={onVideoClick}
        display={display}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(VideoListComponent).toJSON;

    expect(component).toMatchSnapshot();
  });

  describe("VideoItem Click", () => {
    beforeEach(() => {
      render(VideoListComponent);
    });

    it('calls onVideoClick wehn clicking "VideoItem Component"', () => {
      const button = screen.getAllByTitle("videoItem")[0];
      userEvent.click(button);
      expect(onVideoClick).toHaveBeenCalledWith(videos[0]);
    });

    it('call videoInfo when clicking "VideoItem Component"', () => {
      const button = screen.getAllByTitle("videoItem")[0];
      const title = screen.getAllByTestId("title")[0];
      const channel = screen.getAllByTestId("channel")[0];

      userEvent.click(button);

      expect(title).toHaveTextContent(videos[0].snippet.title);
      expect(channel).toHaveTextContent(videos[0].snippet.channelTitle);
    });
  });
});
