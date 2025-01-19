"use client"

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowUp, Plus } from 'lucide-react'
import { useFormik } from 'formik'
import { composerValidations } from '@/validations/composer.validations'

const Composer = () => {

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      prompt: "",
      quality: "",
      variations: "",
    },
    validationSchema: composerValidations,

    onSubmit: (values) => {
      formik.resetForm();
    }
  });

  return (
    <div className="border rounded-3xl w-full sm:w-3/4 lg:w-1/2 bg-background2">
      <form onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}>
        <div className="flex flex-col gap-3 p-3">
          {/* Input Field */}
          <div>
            <Input
              type="text"
              {...formik.getFieldProps("prompt")}
              name="prompt"
              placeholder="Describe your image..."
              className="border-none w-full"
            />
            {formik.errors.prompt && formik.touched.prompt && <p className="text-red-500 text-sm">{formik.errors.prompt}</p>}
          </div>
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex flex-wrap gap-3 items-center">
              {/* Quality Selection */}
              <div>
                <Select
                  {...formik.getFieldProps("quality")}
                  value={formik.values.quality}
                  onValueChange={(value) => formik.setFieldValue("quality", value)}
                  name='quality'>
                  <SelectTrigger className="rounded-full bg-background3">
                    <SelectValue placeholder="Quality" />
                  </SelectTrigger>
                  <SelectContent className='bg-background3'>
                    <SelectItem value="1024x1024">1024p</SelectItem>
                    <SelectItem value="512x512">512p</SelectItem>
                    <SelectItem value="256x256">256p</SelectItem>
                  </SelectContent>
                </Select>
                {formik.errors.quality && formik.touched.quality && <p className="text-red-500 text-sm">{formik.errors.quality}</p>}
              </div>
              {/* Variations Selection */}
              <div>
                <Select
                  {...formik.getFieldProps("variations")}
                  value={formik.values.variations}
                  onValueChange={(value) => formik.setFieldValue("variations", value)}
                  name='variations' >
                  <SelectTrigger className="rounded-full bg-background3">
                    <SelectValue placeholder="Variations" />
                  </SelectTrigger>
                  <SelectContent className='bg-background3'>
                    <SelectItem value="4">4 images</SelectItem>
                    <SelectItem value="3">3 images</SelectItem>
                    <SelectItem value="2">2 images</SelectItem>
                    <SelectItem value="1">1 image</SelectItem>
                  </SelectContent>
                </Select>
                {formik.errors.variations && formik.touched.variations && <p className="text-red-500 text-sm">{formik.errors.variations}</p>}
              </div>
            </div>
            {/* Submit Button */}
            <div>
              <Button type='submit' className="rounded-full p-3">
                <ArrowUp className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div >
  )
}

export default Composer