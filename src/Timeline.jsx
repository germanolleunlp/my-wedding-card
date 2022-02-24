import React from 'react';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import Colors from './Colors';
import { smallAndMediumBreakpoint } from './Breakpoints';

const CONTENT_STYLE = {
  background: Colors.black,
  color: Colors.white,
  boxShadow: 'none'
};

const ICON_STYLE = {
  background: Colors.black,
  color: Colors.white,
  boxShadow: 'none'
};

const CONTENT_ARROW_STYLE = { borderRight: `7px solid  ${Colors.black}` };

const ITEMS = [
  {
    id: 'church',
    date: '5:45pm - 8 OCT 22',
    content: (
      <>
        <h3>Iglesia</h3>
        <h4>Santa Fe, ROS</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
          nisl non turpis efficitur, quis egestas nulla interdum. Aenean
          tincidunt vel sapien sit amet pharetra.
        </p>
      </>
    )
  },
  {
    id: 'civil',
    date: '5:45pm - 8 OCT 22',
    content: (
      <>
        <h3>Civil</h3>
        <h4>Santa Fe, ROS</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
          nisl non turpis efficitur, quis egestas nulla interdum. Aenean
          tincidunt vel sapien sit amet pharetra.
        </p>
      </>
    )
  },
  {
    id: 'salon',
    date: '5:45pm - 8 OCT 22',
    content: (
      <>
        <h3>Salon</h3>
        <h4>Santa Fe, ROS</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
          nisl non turpis efficitur, quis egestas nulla interdum. Aenean
          tincidunt vel sapien sit amet pharetra.
        </p>
      </>
    )
  }
];

function BookmarkIcon() {
  return <FontAwesomeIcon icon={regular('bookmark')} />;
}

function Timeline({ className }) {
  return (
    <section id="#/timeline" className={className}>
      <VerticalTimeline lineColor={Colors.black}>
        {ITEMS.map(item => (
          <VerticalTimelineElement
            key={item.id}
            contentStyle={CONTENT_STYLE}
            contentArrowStyle={CONTENT_ARROW_STYLE}
            iconClassName="timeline-element-icon"
            date={item.date}
            iconStyle={ICON_STYLE}
            icon={<BookmarkIcon />}
          >
            {item.content}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

const StyledTimeline = styled(Timeline)`
  margin: 25px 0;
  ${smallAndMediumBreakpoint(`
    .timeline-element-icon svg {
      width: 16px;
      height: 16px;
      margin-left: -8px;
      margin-top: -8px;
    }
  `)}
  }
`;

export default React.memo(StyledTimeline);
