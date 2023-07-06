import { LightningElement, track } from 'lwc';

export default class ssButtonWithModal extends LightningElement {
    @track isModalOpen=false;
    @track inputText='';
    @track buttonText = 'Please Click';

    openModal(){
        this.isModalOpen = true;
        this.inputText='';
    }

    closeModal(){
        this.isModalOpen = false;
    }

    handleInputChange(event){
        this.inputText = event.target.value;
    }

    handleSave(){
        this.buttonText = this.inputText;
        this.closeModal();
    }


}