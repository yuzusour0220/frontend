const loading = () => {
    return (
      <div>
        <div
          className="h-full flex justify-center items-center"
          ari-label="読み込み中"
        >
          <div className="animate-spin rounded-full h-10 w-10 border-4  border-green-500 rounded-full border-t-transparent"></div>
        </div>
      </div>
    );
  };
  
  export default loading;
  