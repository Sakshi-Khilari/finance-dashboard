function SummaryCard({ title, amount }) {
  return (
    <div className="col-md-4">
      <div className="card p-3 shadow-sm text-center">
        <h6 className="text-muted">{title}</h6>
        <h3>₹{amount}</h3>
      </div>
    </div>
  );
}

export default SummaryCard;
