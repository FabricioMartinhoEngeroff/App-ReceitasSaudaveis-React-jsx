import styled from "styled-components";

const VideoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 150px;
  min-width: 150px;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
`;

const VideoItem = ({ video, aoVideoSelecionado }) => {
  return (
    <VideoItemWrapper>
      <video
        onClick={() => aoVideoSelecionado(video)}
        controls={false}
      >
        <source src={video.path} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className="title">{video.title}</div>
    </VideoItemWrapper>
  );
};

export default VideoItem;