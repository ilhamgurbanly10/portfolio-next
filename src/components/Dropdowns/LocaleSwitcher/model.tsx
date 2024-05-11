const useModel = () => {
  const items = [
    {
      key: "1",
      label: <a href="/az">AZ</a>,
    },
    {
      key: "2",
      label: <a href="/en">EN</a>,
    },
    {
      key: "3",
      label: <a href="/de">DE</a>,
    },
  ];

  return { items };
};

export default useModel;
