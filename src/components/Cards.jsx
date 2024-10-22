import "../style/cards.css";

export const Avatar = () => {
  const baseUrl = 'https://api.dicebear.com/9.x/adventurer/svg?seed=Felix'
  const avatarTypes = ['svg'] 
  const avatarName = ['adventurer', 'felix', 'loro', 'gato']
  const avatarInfo = [
    'con suerte para todos',
    'podria ser posible',
    'no sonrias tan temprano',
    'llegar a una fila y ser el primero que bendicion'
  ];
  const getRandom = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const avatars = avatarTypes.map((type) => {
    const randomName = getRandom(avatarName);
    const randomInf = getRandom(avatarInfo);
    
    return (
      <div className="card">
        <h2>{avatarName[randomName]}</h2>
        <img src={`${baseUrl}/${type}`} />
        <p>{avatarInfo[randomInf]}</p>
      </div>
    );
  });

  return <div className="container">{avatars}</div>;
};