class Team {
  constructor(name) {
    this.name = name;
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }
}

module.exports = Team;
