﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace W_GJS.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    
    public partial class D_ORDER_DETAIL
    {
        [Display(Name = "Chi tiết đơn hàng")]
        public long ORDER_DETAIL_CD { get; set; }
        [DataType(DataType.Text)]
        [Display(Name = "Mã đơn hàng")]
        public Nullable<long> ORDER_CD { get; set; }
        [Display(Name = "Tên sản phẩm")]
        public Nullable<long> PRODUCT_CD { get; set; }
        [DataType(DataType.Text)]
        [Display(Name = "Kích thước")]
        public string SIZE { get; set; }
        [Display(Name = "Số lượng")]
        public Nullable<long> QUANTITY { get; set; }
        
        [Display(Name = "Đơn giá")]
        [DisplayFormat(DataFormatString = "{0:0,0}")]
        public Nullable<decimal> PRICE { get; set; }
        public Nullable<long> STATUS { get; set; }
        public Nullable<bool> ACTIVE { get; set; }
        public Nullable<System.DateTime> CREATEDATE { get; set; }
    
        public virtual O_ORDER O_ORDER { get; set; }
        public virtual O_PRODUCT O_PRODUCT { get; set; }
    }
}