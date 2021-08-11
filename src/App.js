import './App.css';
import React from "react";
import contacts from "./contacts.json";




class Contacts extends React.Component  {

    state = {
        contacts : contacts.slice(0,5)
    };

    addRandomContact = () => {

      const randomContact = 
      contacts[Math.floor(Math.random() * contacts.length)]
      const copy = [...this.state.contacts];
      copy.push(randomContact);

      // this.state.contacts.push(randomContact);
      this.setState({
        contacts: copy,
      });

    };

    sortByName = () => {

      const copy = [...this.state.contacts];
      copy.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      this.setState({
        contacts: copy,
      });

    };


    sortByPopularity = () => {

      const copy = [...this.state.contacts];
      copy.sort((a,b) => a.popularity - b.popularity);
      this.setState ({
        contacts:copy,
      });

    }

  render() {

    return (

     <div> 
       <button onClick={this.addRandomContact}>Create</button>
       <button onClick={this.sortByName}>Sort by Name</button>
       <button onClick={this.sortByPopularity}>Sort by Pop</button>
      <div>

        <table className="Contact">

        <thead>
        <tr>
        
             <th >Picture</th>
             <th>Name</th>
             <th>Popularity</th>
             
           </tr>

           </thead>


           <tbody>

         {this.state.contacts.map((contact)=>{
           return(<div>
            <tr key={contact.id}>
             <td>
               <img style={{
                 height: "auto",
                 width: 60,
               }}
                src={contact.pictureUrl} 
                alt={contact.name} />
             </td>
             <td>{contact.name}</td>
             <td>{contact.popularity.toFixed(2)}</td>
           </tr>

           

           </div>
           
           )
           

         })}
         
         </tbody>
        </table>

         </div>
         </div>
    );
  }
}

export default Contacts;
