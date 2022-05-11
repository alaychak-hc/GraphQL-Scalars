// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 05-11-2022 11:57:10 PM
    Last Modified: 05-12-2022 02:03:02 AM
    Last Updated By: Andrew Laychak

    Description: Scalar for the upload file from an Ant Design File Upload component

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { GraphQLError, GraphQLScalarType } from 'graphql';
// #endregion

// #region Ant Design File Upload Scalar
const AntDesignFileUploadScalar = new GraphQLScalarType({
  name: 'AntDesignFileUploadScalar',
  description:
    'The upload scalar that represents a file from an Ant Design File Upload component',
  parseValue(value: { promise: unknown }) {
    if ('originFileObj' in value) return value.promise;
    throw new GraphQLError('Ant Design - upload value invalid.');
  },
  parseLiteral(ast) {
    throw new GraphQLError('Ant Design - upload literal unsupported.', ast);
  },
  serialize() {
    throw new GraphQLError('Ant Design - upload serialization unsupported.');
  },
});
// #endregion

// #region Exports
export default AntDesignFileUploadScalar;
// #endregion
