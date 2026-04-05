## Chapter 1

### Database systems
**Traditional database applications**: most of the information that is stored and accessed is either textual or numeric.
**Multimedia databases**: can store images, audio clips, video streams.
**Geographic information systems (GISs)**: can store and analyse maps, weather data and satellite images.
**Data warehouses**: are used to extract and analyse useful business information from very large databases to support decision making.
Database search techniques are being applied to the World Wide Web to improve the search for information that is needed by users browsing the Internet.

### Introduction
A **database** is a collection of related data. By **data**, we mean known facts that can be recorded and that have implicit meaning.

A database has the following implicit properties
- A database represents some aspect of the real world, sometimes called the **universe of discourse**.
- A database is a logically coherent collection of data with some inherent me. A random assortment of data cannot correctly be referred to as a database.
- A database is designed, built, and populated with data for a specific purpose. It has an intended group of users and some preconceived applications in which these users are interested.

A **database management system DBMS** is a computerised system that enables users to create and maintain a database. **Defining** a database involves specifying the data types, structures, and constraints of the data to be stored in the database. **Constructing** the database is the process of storing the daytime storage medium that is controlled by the DBMS. **Manipulating** a database includes functions such as querying the database to retrieve specific data, updating the database to reflect changes in the mini world, and generating reports from the data. **Sharing** a data database allows multiple users and programs to access the database simultaneously.

An **application program** accesses the database by sending queries or requests for data to the DBMS. A **query[^1]** typically causes some data to be retrieved; a **transaction** may cause some data to be read and some data to be written into the database.

** Protection** includes system protection against hardware or software malfunction security protection against unauthorised or malicious access. A typical large database may have a life cycle of many years, so the DBMS must be able to **maintain** the database system by allowing the system to evolve as require requirements change over time.

To complete our initial definitions, we will call the database and DBS software together a **database system**.

### Example

Under construction

### Characteristics of the Database Approach

[^1]:	The term _query_, originally meaning a question or an inquiry, is sometimes loosely used for all types of interactions with databases, including modifying the data.