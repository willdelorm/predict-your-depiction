const Rank = ({ name, entries }) => {
  return (
    <div className="text-white mb-3">
      <div className="fs-3">{`${name}, your current entry count is...`}</div>
      <div className="fs-1">{`${entries}`}</div>
    </div>
  );
};

export default Rank;
