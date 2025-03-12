// //Standard JS
// var targetFrankie = document.getElementById("frankie");
// var countFrankie = 0;

// function countfrankie(){
//     var txt  = "<p>Counter: " + countFrankie++ + "</p>";
//     txt += "<p>HR Department</p>";
//     targetFrankie.innerHTML = txt;
// }

// setInterval(countfrankie,1000);

// //ReactJS

// var targetDon = document.getElementById("don");
// var countDon = 0;

// function countdon(){
//     ReactDOM.render(
//         <div>
//             <p>Counter: {countDon++}</p>
//             <p>IT Department</p>
//         </div>
//         ,
//         targetDon
//     );
// }

// setInterval(countdon,1000);

var targetTeam = document.getElementById("team");

var TeamMember = React.createClass({
    render: function() {
        return (
            <div className="team-member">
                <img id={this.props.id} className="profile" src={`images/${this.props.id}.png`}/>
                <p className="team-name">{this.props.name}</p>
                <p className="team-title">{this.props.title}</p>
            </div>
        )
    }
});

var teamMembers = [
    {
        id: 'frankiesmith',
        name: 'Frankie Smith',
        title: 'Sponsor'
    },
    {
        id: 'donlee',
        name: 'Don Lee',
        title: 'Developer'
    },
    {
        id: 'nickgreen',
        name: 'Nick Green',
        title: 'Team Lead'
    },
    {
        id: 'ninjablack',
        name: 'Ninja Black',
        title: 'Project Manager'
    },
];

var TeamList = React.createClass({
    render: () => (
        <div>
            {
                teamMembers.map((member) => (
                        <TeamMember 
                            id={member.id}
                            name={member.name}
                            title={member.title}/>
                    )
                )
            }
        </div>
    )
})

ReactDOM.render(
    <TeamList />
    ,
    targetTeam
);