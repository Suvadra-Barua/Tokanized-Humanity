import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../components/ui/form-fields/InputField';

interface ISignUp{
  name:string,
  email:string,
  address:string,
  profilePicture:File|undefined,
  passportImage:File|undefined,
  nIDImage:File|undefined,
  drivingLicenseImage:File|undefined,
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  profilePicture: yup.mixed().required('Profile picture is required'),
  passportImage: yup.mixed().required('Passport image is required'),
  nIDImage: yup.mixed().required('NID image is required'),
  drivingLicenseImage: yup.mixed().required('Driving license image is required'),

});

function SignUp() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ISignUp>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',

  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-bold">Create Campaign</h2>
      <form onSubmit={onSubmit} className="pt-6 space-y-6">
        <InputField
          type="text"
          label=" Name"
          {...register('name')}
          errorMessage={
        errors.name && errors.name.message
      }
        />

        <InputField type="email" label="Email" {...register('email')} errorMessage={errors.email && errors.email.message} />

        <InputField
          type="address"
          label="Address"
          {...register('address')}
          errorMessage={
        errors.address && errors.address.message
      }
        />

        <div className="space-y-1">
          <p className={`font-medium ${errors.profilePicture ? 'text-red-500' : 'text-gray-500'}`}>
            Profile Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('profilePicture') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'profilePicture',
                 ) && URL.createObjectURL(
                watch('profilePicture')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-picture-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-picture-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('profilePicture', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('profilePicture')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'profilePicture',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.profilePicture && (<p className="text-xs text-red-500">{errors.profilePicture.message}</p>)
          }
        </div>

        <div className="space-y-1">
          <p className={`font-medium ${errors.passportImage ? 'text-red-500' : 'text-gray-500'}`}>
            Passport Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('passportImage') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'passportImage',
                 ) && URL.createObjectURL(
                watch('passportImage')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-passport-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-passport-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('passportImage', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('passportImage')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'passportImage',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.passportImage && (<p className="text-xs text-red-500">{errors.passportImage.message}</p>)
          }
        </div>

        <div className="space-y-1">
          <p className={`font-medium ${errors.nIDImage ? 'text-red-500' : 'text-gray-500'}`}>
            NID Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('nIDImage') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'nIDImage',
                 ) && URL.createObjectURL(
                watch('nIDImage')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-nid-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-nid-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('nIDImage', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('nIDImage')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'nIDImage',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.nIDImage && (<p className="text-xs text-red-500">{errors.nIDImage.message}</p>)
          }
        </div>

        <div className="space-y-1">
          <p className={`font-medium ${errors.drivingLicenseImage ? 'text-red-500' : 'text-gray-500'}`}>
            Driving License Image
          </p>
          <div
            className="flex flex-wrap items-center"
          >
            {
               watch('drivingLicenseImage') && (
               <img
                 className="object-cover w-20 h-20 mr-4 border rounded-full"
                 src={watch(
                   'drivingLicenseImage',
                 ) && URL.createObjectURL(
                watch('drivingLicenseImage')!,
                 )}
                 alt="user avatar"
               />
               )
}

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <label
                htmlFor="browse-driving-license-file-button"
                className="w-full"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="browse-driving-license-file-button"
                  type="file"
                  onChange={(e) => {
                    // eslint-disable-next-line no-unused-expressions
                    e.target.files && setValue('drivingLicenseImage', e.target.files[0]!);
                  }}
                />
                <div className="px-3 py-2 font-medium text-center text-white rounded-lg cursor-pointer bg-primary">
                  Browse
                </div>
              </label>
              {
               watch('drivingLicenseImage')
              && (
              <button
                type="button"
                onClick={
                () => setValue(
                  'drivingLicenseImage',
                  undefined,
                )

              }
                className="px-3 py-2 font-medium border rounded-lg border-primary"
              >
                Delete
              </button>
              )
}
            </div>

          </div>
          {
            errors.nIDImage && (<p className="text-xs text-red-500">{errors.nIDImage.message}</p>)
          }
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-4 py-1 text-white transition duration-500 rounded-full bg-primary hover:bg-secondary ${
              isSubmitting && ' opacity-50 cursor-not-allowed'}`}
            disabled={isSubmitting}
          >
            Create Campaign
            {isSubmitting && <span className="spinner" />}
          </button>
        </div>

      </form>
    </div>
  );
}

export default SignUp;
