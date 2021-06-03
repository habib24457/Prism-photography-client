import React from 'react';
import Modal from 'react-modal';
import './ClientModal.css';

const ClientOrderModal = ({modalIsOpen,closeModal,cardData}) => {
    console.log(cardData.billing_details);
    console.log(cardData.card);

   const {brand,country,exp_month,exp_year,funding}=cardData.card;

   console.log(brand);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
              <div className="modal-design">
                  <h4>Payment card details</h4>
                <h6 className="all-text-color">Payment card: <span className="modal-text-color">{brand}</span> </h6>
                <h6 className="all-text-color">Card country: <span className="modal-text-color">{country}</span> </h6>
                <h6 className="all-text-color">Expiry month: <span className="modal-text-color">{exp_month}</span> </h6>
                <h6 className="all-text-color">Expiry year: <span className="modal-text-color">{exp_year}</span> </h6>
                <h6 className="all-text-color">Card type: <span className="modal-text-color">{funding}</span> </h6>
              </div>
            </Modal>   
        </div>
    );
};

export default ClientOrderModal;