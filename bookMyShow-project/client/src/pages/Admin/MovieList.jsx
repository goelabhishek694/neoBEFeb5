import React from 'react'
import { Table } from "antd";

function MovieList() {
    const movies = [
        {
          key: '1',
          poster: 'Image1',
          name: 'Mastaney',
          description: 'Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ',
          duration: 130,
          genre: "Action",
          language: "Hindi",
          releaseDate: "Oct  25, 2023",
        },
        {
          key: '2',
          poster: 'Image2',
          name: 'Bajirao Mastani',
          description: 'Set in 1600s. Film depicting the rise of Maratha empire',
          duration: 120,
          genre: "Action",
          language: "Hindi",
          releaseDate: "Oct  25, 2023",
          action: "Delete"
        },

      ]; 
      const tableHeadings = [
        {
          title: 'Poster',
        //   dataIndex: 'poster',
        },
        {
          title: 'Movie Name',
          dataIndex: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
        },
        {
          title: 'Duration',
          dataIndex: 'duration',
        },
        {
          title: 'Genre',
          dataIndex: 'genre',
        },
        {
          title: 'Language',
          dataIndex: 'language',
        },
        {
          title: 'Release Date',
          dataIndex: 'releaseDate',
        },
        {
            title: 'Action',
          },
      ];
      

  return (
    <div>
      <Table dataSource={movies} columns={tableHeadings}/>
    </div>
  )
}

export default MovieList
