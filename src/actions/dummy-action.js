const DUMMY = "DUMMY";

const createDummy = (dummyData) => {
  return {
    type: DUMMY,
    payload: { dummyData },
  };
};

export default createDummy;
