const graphql = require('graphql')
const Category = require('../models/category')
const Expense = require('../models/expense')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  // GraphQLInt,
  GraphQLList,
  // GraphQLNonNull,
  GraphQLFloat
} = graphql

const ExpenseType = new GraphQLObjectType({
  name: 'Expense',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    value: {
      type: GraphQLFloat
    },
    currency: {
      type: GraphQLString
    },
    categoryId: {
      type: GraphQLString
    },
    userId: {
      type: GraphQLString
    },
    category: {
      type: CategoryType,
      resolve (parent, args) {
        return Category.findById(parent.categoryId)
      }
    }
  })
})

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    expenses: {
      type: new GraphQLList(ExpenseType),
      resolve (parent, args) {
        return Expense.find({
          categoryId: parent.id
        })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    expense: {
      type: ExpenseType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve (parent, args) {
        return Expense.findById(args.id)
      }
    },
    category: {
      type: CategoryType,
      args: {
        id: {
          type: GraphQLID
        },
        title: {
          type: GraphQLString
        }
      },
      resolve (parent, args) {
        if (args.id) {
          return Category.findById(args.id)
        }
        if (args.title) {
          return Category.findOne({
            title: args.title
          })
        }
        return null
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve (parent, args) {
        return Category.find({})
      }
    },
    expenses: {
      type: new GraphQLList(ExpenseType),
      resolve (parent, args) {
        return Expense.find({})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
