import { set } from 'panels-pages/actions';
import pagesReducer from 'panels-pages/reducer';

const DUMMY = {
  '/': {
    title: 'UXtemple',
    style: {
      backgroundColor: '#323232',
      color: 'white',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 100,
      paddingBottom: 200,
      paddingLeft: 35,
      paddingRight: 35
    },
    blocks: [{
      element: 'image',
      data: {
        src: '//uxtemple.com/uxtemple.svg',
        text: 'UXtemple'
      },
      style: {
        marginTop: 100,
        width: 100
      }
    }, {
      element: 'text',
      data: {
        text: 'Today at UXtemple we question status quo, we experiment and re-imagine a new web browsing experience we call Panels.'
      },
      style: {
        marginTop: 25,
        fontSize: 20
      }
    }, {
      element: 'action',
      data: {
        href: 'https://usepanels.com/',
        text: 'Use Panels'
      },
      style: {
        active: {
          paddingLeft: 15
        },
        hover: {
          paddingLeft: 15
        },
        base: {
          alignSelf: 'stretch',
          borderBottomColor: 'rgba(255,255,255,0.75)',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          color: 'white',
          marginTop: 50,
          paddingTop: 15,
          paddingBottom: 15,
          textTransform: 'uppercase',
          transition: 'padding-left 0.25s linear'
        }
      }
    }, {
      element: 'text',
      data: {
        text: 'Get in touch.'
      },
      style: {
        marginTop: 50
      }
    }, {
      element: 'text',
      data: {
        text: 'Say hi@UXtemple.com.'
      },
      style: {
        marginTop: 5
      }
    }]
  }
};

export default function getInitialState(panelProps) {
  return {
    pages: pagesReducer(undefined, set(DUMMY))
  };
}
