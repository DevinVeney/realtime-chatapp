import PropTypes from 'prop-types';


import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {

  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="ead84d2f-f2a6-489b-b818-53b6c9112a25"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
      />
    </div>
  );
};
ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};
export default ChatsPage;
