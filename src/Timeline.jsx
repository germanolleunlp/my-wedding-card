import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import Colors from './Colors';
import { smallAndMediumBreakpoint, largeBreakpoint } from './Breakpoints';

const MIN_SCROLLED_PERCENT = 25;
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

function TimelineContent({ className, theme }) {
  const contentStyle = {
    background: theme.colors.backgroundOneInverted,
    color: theme.colors.textInverted,
    boxShadow: 'none'
  };

  const iconStyle = {
    background: theme.colors.backgroundOneInverted,
    color: theme.colors.textInverted,
    boxShadow: 'none',
    zIndex: 40
  };

  const contentArrowStyle = {
    borderRight: `7px solid  ${theme.colors.backgroundOneInverted}`
  };

  return (
    <div className={className}>
      <div className="timeline-line" />
      <VerticalTimeline className="timeline-root" lineColor={Colors.black}>
        {ITEMS.map(item => (
          <VerticalTimelineElement
            key={item.id}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconClassName="timeline-element-icon"
            dateClassName="timeline-element-date"
            date={item.date}
            iconStyle={iconStyle}
            icon={<BookmarkIcon />}
          >
            {item.content}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

const StyledTimelineContent = styled(TimelineContent)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  padding: 16px;
  .timeline-line {
    content: '';
    position: absolute;
    top: 0;
    left: 34px;
    width: 4px;
    z-index: 30;
    background: ${({ theme }) => theme.colors.backgroundOneInverted};
    height: ${props => `${props.completed}%`};
  }
  ${largeBreakpoint(`
    .timeline-line {
      left: 50%;
      margin-left: -2px;
    }
  `)}
`;

function Timeline({ className, theme }) {
  const [completed, setCompleted] = useState(0);
  const ref = useRef(null);

  const onScroll = () => {
    if (ref?.current) {
      const scrolled = window.pageYOffset + window.innerHeight;
      const { offsetTop = 0, offsetHeight = 0 } = ref.current;

      if (scrolled >= offsetTop) {
        const diff = scrolled - offsetTop;
        const percent = offsetHeight > 0 ? (diff * 100) / offsetHeight : 0;

        if (percent >= MIN_SCROLLED_PERCENT) {
          setCompleted(Math.min(percent - MIN_SCROLLED_PERCENT, 100));
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="#/timeline" className={className} ref={ref}>
      <StyledTimelineContent completed={completed} theme={theme} />
    </section>
  );
}

const StyledTimeline = styled(Timeline)`
  margin: 1rem;
  .timeline-root {
    width: 100%;
  };
  .timeline-root::before {
    background: ${({ theme }) => theme.colors.backgroundOne};
  };
  .timeline-element-date {
    opacity: 1 !important;
    color: inherit;
  }
  ${({ theme }) =>
    largeBreakpoint(`.timeline-element-date { color: ${theme.colors.text}; }`)}
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
