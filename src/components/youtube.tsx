import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const EmbedHolder = styled.div`
    overflow: hidden;
    padding-bottom: 225px;
    position: relative;
    height: 0;
`;

const YoutubeEmbed = ({ embedId }) => (
    <EmbedHolder>
        <iframe
            width="400"
            height="225"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </EmbedHolder>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;