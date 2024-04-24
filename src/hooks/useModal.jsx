import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useUpdateBlogs from './useUpdateBlogs';
import { useDispatch } from 'react-redux';
import { add } from '../store/slices/blogs';
import ManageBlogs from '../routes/pages/ManageBlogs';
import { useState } from 'react';

const swal = withReactContent(Swal)

export default (dispatcher) => {

    swal.fire({
        title: "نام مقاله را وارد کنید",
        input: "text",
        inputValue : "hi",
        showCancelButton: true,
        cancelButtonText: "لفو",
        confirmButtonText: "تائید",
        showLoaderOnConfirm: true,
        preConfirm: async (postName) => {
          // const dispatcher = useDispatch()
          try {

            // axios mockapi version
            const url = 'https://660453ae2393662c31d12ede.mockapi.io/admin-posts'

            let data = {
              name : postName,
              createdAt : new Date().toLocaleString(),
            }

            let result = useUpdateBlogs({ method : "post" , data })
            
            // dispatcher(add(res.data))
            console.log(result);
            return result

          } catch (error) {
            swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {
        
        if (result.isConfirmed) {
          console.log(result);
          dispatcher(add([result.value]))
          swal.fire({
            title: `${result.value.name} ایجاد شد`,
            // imageUrl: result.value.avatar_url
          });
          return result.value
        }
      })
}


