class Avatar extends React.Component{
	render() {
		var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
		return <img src={url} className="avatar"/>
	}
}