import { memo, useCallback, useState } from 'react';

import { IPokemon } from '../../dtos';

import { Modal } from 'antd';

import styles from './styles.module.less';

interface ICardProps {
  pokemon: IPokemon;
}

const Card = ({ pokemon }: ICardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [type] = pokemon.types;

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={styles[`${type.toLowerCase()}`]}
        data-testid="pokemon-card"
      >
        <div className={styles.imageContainer}>
          <img
            src={pokemon.images.small}
            alt="Pokemon Card Game"
            data-testid="pokemon-card-image"
          />
        </div>
        <div className={styles.descriptionContainer}>
          <strong data-testid="pokemon-name">{pokemon.name}</strong>

          {!!pokemon.subtypes && (
            <span>
              subtypes:{' '}
              <p data-testid="pokemon-subtype">
                {pokemon.subtypes?.join(', ')}
              </p>
            </span>
          )}

          {!!pokemon.weaknesses && (
            <span>
              weaknesses:
              {pokemon.weaknesses?.map(weakness => (
                <p key={weakness.type} data-testid="pokemon-weakness">
                  {weakness.type} | {weakness.value}
                </p>
              ))}
            </span>
          )}

          <span>
            attacks:
            {pokemon.attacks?.map((attack, index) => (
              <p key={index} data-testid="pokemon-attack">
                {attack.name}
              </p>
            ))}
          </span>
        </div>
      </button>

      <Modal
        visible={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleCloseModal}
        className={styles.modalContainer}
        width={650}
        data-testid="pokemon-modal"
      >
        <div className={styles.modalContent}>
          <img src={pokemon.images.large} alt="Pokemon Card Game" />
          <article className={styles.modalDescriptionContainer}>
            {pokemon.attacks?.map((attack, index) => (
              <>
                <span key={index}>
                  {attack.name}
                  {!!attack.text && ': '}
                </span>
                <p>{attack.text}</p>
              </>
            ))}
          </article>
        </div>
      </Modal>
    </>
  );
};

export default memo(Card);
