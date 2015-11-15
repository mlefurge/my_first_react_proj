var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commmentBox">
        Hello, world! I am a CommentBox.
      </div>
      );
    }
  });

  var CommentList;

ReactDOM.render(
  <CommentBox />, document.getElementById('content')
  );
