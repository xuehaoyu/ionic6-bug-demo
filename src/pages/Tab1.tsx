import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonList, IonItem, IonLabel } from '@ionic/react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Dom: React.FC = (props: any) => {
  return <IonModal isOpen>
    <IonContent>
      <IonList>
        <IonItem onClick={() => {
          console.log('11111')
        }}>
          <IonLabel>Pokémon Yellow</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonModal>
}

const Tab1: React.FC = () => {
  useEffect(() => {
    const createDiv = document.createElement('div')
    const parentDom = document.body
    parentDom.appendChild(createDiv)
    const root = createRoot(createDiv);
    root.render(<Dom></Dom>)
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
      {/* <Dom></Dom> */}
    </IonPage>
  );
};

export default Tab1;
