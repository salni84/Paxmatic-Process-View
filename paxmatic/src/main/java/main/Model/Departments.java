package main.Model;

import javax.persistence.*;


@Entity
@Table(name="departments")
public class Departments {

        @Id
        @GeneratedValue
        Integer id;

        @Column(name = "departmentname")
        private String departmentname;

        @Column(name = "color")
        private String color;

        @Column(name = "verticalorder")
        private Integer verticalorder;

        @Column(name = "parent")
        private Integer parent;

        public void setParent(Integer parent) {
                this.parent = parent;
        }

        public Integer getParent() {
                return parent;
        }

        public Integer getId() {
            return id;
        }

        public String getDepartmentname() {
            return departmentname;
        }

        public String getColor() {
            return color;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public void setDepartmentname(String departmentname) {
            this.departmentname = departmentname;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public void setVerticalorder(Integer verticalorder) {
        this.verticalorder = verticalorder;
        }

        public Integer getVerticalorder() {
        return verticalorder;
        }
}